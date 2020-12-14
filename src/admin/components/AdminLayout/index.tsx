import React, { useState } from 'react'
import moment from 'moment'
import { Layout, Menu, Button, PageHeader } from 'antd'
import { useRouter } from 'next/dist/client/router'
import {
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
  RadarChartOutlined,
  EllipsisOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons'

const { Content, Footer, Sider } = Layout

const NAV_ITEMS = [
  {
    title: 'introduce',
    icon: <UserOutlined />,
    to: 'introduce',
  },
  {
    title: 'skill',
    icon: <RadarChartOutlined />,
    to: 'skill',
  },
  {
    title: 'project',
    icon: <FolderOpenOutlined />,
    to: 'project',
  },
  {
    title: 'career',
    icon: <TeamOutlined />,
    to: 'career',
  },
  {
    title: 'article',
    icon: <FileTextOutlined />,
    to: 'article',
  },
  {
    title: 'etc',
    icon: <EllipsisOutlined />,
    to: 'etc',
  },
]

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
          {NAV_ITEMS.map(({ title, to, icon }) => (
            <Menu.Item icon={icon} key={to} onClick={() => router.push(to)}>
              {title}
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
