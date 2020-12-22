import { useState } from 'react'
import useSWR from 'swr'
import { Button, Card, List, Modal, Space } from 'antd'

import { API, ArticleAPI, ArticleGETResponse } from '@Admin/api'
import ArticleForm from '@Admin/components/Forms/ArticleForm'
import confirm from '@Admin/helpers/confirm'
import useModal from '@Admin/hooks/useModal'
import AdminLayout from '@Admin/layout'
import { FormCompletedType } from '@Admin/types'
import { palette } from '@Shared/styles'
import { Article } from '@Shared/types/Article'

function ArticleManagement() {
  const { data: articleResponse, mutate } = useSWR<ArticleGETResponse>(ArticleAPI.get(), API)

  const [selectedArticle, setSelectedArticle] = useState<Article>()

  const { visible, close, open } = useModal({
    afterClose() {
      setSelectedArticle(undefined)
    },
  })

  const saveOrUpdateArticle = async (type: FormCompletedType, value: Article) => {
    if (type === 'add') {
      await ArticleAPI.add(value)
    }

    if (type === 'modify') {
      await ArticleAPI.update(value.id, value)
    }

    mutate()
    close()
  }

  const deleteArticle = async (id: string) => {
    await ArticleAPI.delete(id)
    mutate()
  }

  if (!articleResponse) {
    return <span>로딩중</span>
  }

  return (
    <AdminLayout
      title="내가 작성한 기사들"
      subtitle="this is subtitle"
      actions={[
        <Button type="primary" onClick={open}>
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
                    confirm({
                      title: '이 기사를 삭제하시겠습니까?',
                      content: '이 항목을 삭제하면 영구적으로 제거됩니다.',
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
        title="내가 작성한 기사 🏢"
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
