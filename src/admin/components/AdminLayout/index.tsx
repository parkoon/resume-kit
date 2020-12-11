import React from 'react'
import { Layout, Menu } from 'antd'
import moment from 'moment'
import { Footer, Header, Content } from 'antd/lib/layout/layout'
import { useRouter } from 'next/dist/client/router'

const NAV_ITEMS = ['introduce', 'skill', 'experience', 'project', 'education', 'etc', 'article']

type AdminLayoutProps = {
  children: React.ReactNode
  center?: boolean
}
function AdminLayout({ children, center }: AdminLayoutProps) {
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
      <Content
        style={{
          padding: '0 50px',
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
