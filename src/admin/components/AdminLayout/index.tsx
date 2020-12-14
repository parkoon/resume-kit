import React, { useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import { Layout, Menu, PageHeader } from 'antd'
import {
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
  RadarChartOutlined,
  EllipsisOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons'

import { palette } from '@Shared/styles'

const { Content, Footer, Sider } = Layout

export const NAV_ITEMS = [
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
  title: string
  subtitle: string
  actions?: React.ReactNode[]
}
function AdminLayout({ children, title, subtitle, actions = [] }: AdminLayoutProps) {
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
            background: palette.grey[300],
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
      <Layout>
        <PageHeader ghost={false} title={title} subTitle={subtitle} extra={actions} />
        <Content style={{ margin: '16px 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center', padding: '12px' }}>
          ©{moment().format('YYYY')} Created by parkoon
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
