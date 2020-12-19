import { useState } from 'react'
import { Button, Modal, List, Typography, Tag, Card } from 'antd'

import AdminLayout from '@Admin/layout'
import ArticleForm from '@Admin/components/Forms/ArticleForm'
import { Article } from '@Shared/types/Article'
import { palette } from '@Shared/styles'

const articles: Article[] = [
  {
    title: '퀄슨 (퀄슨)',
    url: 'zzz',
    completed: true,
  },
  {
    title: '퀄슨 (퀄슨)',
    url: 'zzz',
    completed: true,
  },
]

function ArticleManagement() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <AdminLayout
      title="내가 작성한 기사들"
      subtitle="this is subtitle"
      actions={[
        <Button type="primary" onClick={showModal}>
          만들기
        </Button>,
      ]}
    >
      <Card>
        <List
          dataSource={articles}
          renderItem={(item: Article) => (
            <List.Item style={{ justifyContent: 'flex-start' }}>
              <a
                href={item.url}
                target="_blank"
                style={{ marginRight: 10, color: palette.blue[700] }}
              >
                {item.title}
              </a>
              {item.completed ? (
                <Tag color="geekblue">작성완료</Tag>
              ) : (
                <Tag color="gold">작성중</Tag>
              )}
              <Button type="dashed">수정하기</Button>
            </List.Item>
          )}
        />
      </Card>

      <Modal
        title="내가 작성한 기사 🏢"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflow: 'scroll' }}
        destroyOnClose
        footer={[
          <Button form="article" type="primary" key="submit" htmlType="submit">
            만들기
          </Button>,
        ]}
      >
        <ArticleForm id="article" />
      </Modal>
    </AdminLayout>
  )
}

export default ArticleManagement
