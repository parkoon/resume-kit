import React, { useState } from 'react'
import moment from 'moment'
import { Layout, Menu, Button, PageHeader } from 'antd'
import { useRouter } from 'next/dist/client/router'
import { TeamOutlined } from '@ant-design/icons'

const { Content, Footer, Sider } = Layout

// TODO. 아이템 구조 변경 (아이콘도 넣어야함, 아이콘 찾기)
const NAV_ITEMS = ['introduce', 'skill', 'project', 'career', 'education', 'etc', 'article']

type AdminLayoutProps = {
  children: React.ReactNode
  center?: boolean
  // TODO. title, action prop 변경, action은 배열로 받기
  // TODO. 추가로 subtitle 받기
  pageTitle?: string
  pageAction?: React.ReactNode
}
function AdminLayout({ children, center, pageTitle, pageAction }: AdminLayoutProps) {
  const router = useRouter()
  const [visible, setVisible] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={visible} onCollapse={(collapsed) => setVisible(collapsed)}>
        {/* TODO. LOGO */}
        <div
          className="logo"
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.pathname.split('/')[2]]}>
          {NAV_ITEMS.map((item) => (
            <Menu.Item icon={<TeamOutlined />} key={item} onClick={() => router.push(item)}>
              {item.toUpperCase()}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <PageHeader
          ghost={false}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        />
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          ©{moment().format('YYYY')} Created by parkoon
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
