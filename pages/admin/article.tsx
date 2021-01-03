import { useState } from 'react'
import useSWR from 'swr'
import { Button, Card, List, Modal, Space } from 'antd'

import { API, ArticleAPI, ArticleGETResponse } from '@Admin/api'
import ArticleForm from '@Admin/components/Forms/ArticleForm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { palette } from '@Shared/styles'
import { Article } from '@Shared/types/Article'
import Loading from '@Admin/components/Loding'
import Confirm from '@Admin/helpers/confirm'
import useMetaValidation from '@Admin/hooks/useMetaValidation'
import Notification from '@Admin/helpers/notification'

function ArticleManagement() {
  useMetaValidation()

  const { data: articleResponse, mutate } = useSWR<ArticleGETResponse>(ArticleAPI.get(), API)

  const [selectedArticle, setSelectedArticle] = useState<Article>()

  const { visible, close, open } = useModal({
    afterClose() {
      setSelectedArticle(undefined)
    },
  })

  const saveOrUpdateArticle = async (type: FormCompletedType, value: Article) => {
    close()
    if (type === 'add') {
      await ArticleAPI.add(value)
    }

    if (type === 'modify') {
      await ArticleAPI.update(value.id, value)
    }

    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  const deleteArticle = async (id: string) => {
    await ArticleAPI.delete(id)
    mutate()
    Notification.success('변경사항이 저장되었습니다.')
  }

  if (!articleResponse) {
    return <Loading />
  }

  return (
    <AdminLayout
      title="내가 작성한 기사들"
      subtitle="블로그나 타 플랫폼에 작성한 포스팅을 공유해주세요."
      actions={[
        <Button key="button" type="primary" onClick={open}>
          만들기
        </Button>,
      ]}
    >
      <Card style={{ height: '100%' }}>
        <List
          dataSource={articleResponse.data}
          renderItem={(item: Article) => (
            <List.Item style={{ justifyContent: 'space-between' }}>
              <a
                href={item.url}
                target="_blank"
                style={{ marginRight: 10, color: palette.blue[700] }}
              >
                {item.title}
              </a>
              <Space>
                <Button
                  type="dashed"
                  onClick={() => {
                    const foundArticle = articleResponse.data.find(
                      (article) => article.id === item.id
                    )
                    if (foundArticle) {
                      setSelectedArticle(foundArticle)
                      open()
                    }
                  }}
                >
                  수정하기
                </Button>
                <Button
                  danger
                  onClick={() =>
                    Confirm.delete({
                      title: '기사',
                      onConfirm() {
                        deleteArticle(item.id)
                      },
                    })
                  }
                >
                  삭제하기
                </Button>
              </Space>
            </List.Item>
          )}
        />
      </Card>

      <Modal
        title="포스팅 만들기"
        visible={visible}
        onOk={close}
        onCancel={close}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="article" type="primary" key="submit" htmlType="submit">
            만들기
          </Button>,
        ]}
      >
        <ArticleForm id="article" onComplete={saveOrUpdateArticle} initialValue={selectedArticle} />
      </Modal>
    </AdminLayout>
  )
}

export default ArticleManagement
