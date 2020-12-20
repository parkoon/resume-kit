import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu, PageHeader } from 'antd'
import {
  RadarChartOutlined,
  EllipsisOutlined,
  FolderOpenOutlined,
  IdcardOutlined,
  ReadOutlined,
  ShopOutlined,
  GlobalOutlined,
} from '@ant-design/icons'

import { palette } from '@Shared/styles'

const { Content, Sider } = Layout

export const NAV_ITEMS = [
  {
    title: '프로필',
    icon: <IdcardOutlined />,
    to: 'profile',
  },
  {
    title: '기술',
    icon: <RadarChartOutlined />,
    to: 'skill',
  },
  {
    title: '프로젝트',
    icon: <FolderOpenOutlined />,
    to: 'project',
  },
  {
    title: '회사',
    icon: <ShopOutlined />,
    to: 'career',
  },
  {
    title: '교육',
    icon: <GlobalOutlined />,
    to: 'education',
  },
  {
    title: '포스팅',
    icon: <ReadOutlined />,
    to: 'article',
  },
  {
    title: '기타',
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
        <Content style={{ padding: '16px 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
