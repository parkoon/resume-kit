import { useState, useEffect } from 'react'
import { Button, Modal, List, Card, Popconfirm, Space } from 'antd'

import AdminLayout from '@Admin/layout'
import ArticleForm from '@Admin/components/Forms/ArticleForm'
import { Article } from '@Shared/types/Article'
import { palette } from '@Shared/styles'
import useModal from '@Admin/hooks/useModal'
import { FormCompletedType } from '@Admin/types'

function ArticleManagement() {
  const [articles, setArticles] = useState<Article[]>([])
  const [selectedArticle, setSelectedArticle] = useState<Article>()
  const { visible, close, open } = useModal({
    afterClose() {
      setSelectedArticle(undefined)
    },
  })

  const saveOrUpdateArticle = (type: FormCompletedType, values: Article) => {
    if (type === 'add') {
      setArticles([...articles, values])
    } else {
      setArticles(articles.map((article) => (article.id === values.id ? values : article)))
    }
    close()
  }

  const updateArticle = (id: string) => {
    const foundArticle = articles.find((article) => article.id === id)
    if (foundArticle) {
      setSelectedArticle(foundArticle)
    }
  }
  const deleteArticle = (id: string) => {
    setArticles(articles.filter((article) => article.id !== id))
  }

  useEffect(() => {
    if (selectedArticle) {
      open()
    }
  }, [selectedArticle])

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
          dataSource={articles}
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
                <Button type="dashed" onClick={() => updateArticle(item.id)}>
                  수정하기
                </Button>
                <Popconfirm
                  title="정말 지우시겠습니까?"
                  okText="삭제"
                  cancelText="취소"
                  onConfirm={() => deleteArticle(item.id)}
                >
                  <Button danger>삭제하기</Button>
                </Popconfirm>
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
