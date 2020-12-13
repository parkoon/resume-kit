import React from 'react'
import { Layout, Menu, Space, Typography, Button } from 'antd'
import moment from 'moment'
import { Footer, Header, Content } from 'antd/lib/layout/layout'
import { useRouter } from 'next/dist/client/router'

const { Title } = Typography

const NAV_ITEMS = ['introduce', 'skill', 'project', 'career', 'education', 'etc', 'article']

type AdminLayoutProps = {
  children: React.ReactNode
  center?: boolean
  pageTitle?: string
  pageAction?: React.ReactNode
}
function AdminLayout({ children, center, pageTitle, pageAction }: AdminLayoutProps) {
  const router = useRouter()

  const centerStyle = center
    ? { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }
    : {}
  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[router.pathname.split('/')[2]]}>
          {NAV_ITEMS.map((item) => (
            <Menu.Item key={item} onClick={() => router.push(item)}>
              {item.toUpperCase()}
            </Menu.Item>
          ))}
        </Menu>
      </Header>

      <div style={{ padding: '2rem 4rem' }}>
        <Space style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            {pageTitle}
          </Title>
          {pageAction}
        </Space>
      </div>
      <Content
        style={{
          padding: '0rem 4rem',
          overflow: 'scroll',
          ...centerStyle,
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>©{moment().format('YYYY')} Created by pk</Footer>
    </Layout>
  )
}

export default AdminLayout
