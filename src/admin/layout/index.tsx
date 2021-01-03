import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu, PageHeader } from 'antd'
import Head from 'next/head'

import {
  RadarChartOutlined,
  EllipsisOutlined,
  FolderOpenOutlined,
  IdcardOutlined,
  ReadOutlined,
  ShopOutlined,
  GlobalOutlined,
  SettingOutlined,
} from '@ant-design/icons'

import { palette } from '@Shared/styles'
import PreviewButton from '@Admin/components/PreviewButton'

const { Content, Sider } = Layout

export const NAV_ITEMS = [
  {
    title: '프로필',
    icon: <IdcardOutlined />,
    to: 'profile',
  },
  {
    title: '회사',
    icon: <ShopOutlined />,
    to: 'career',
  },
  {
    title: '프로젝트',
    icon: <FolderOpenOutlined />,
    to: 'project',
  },
  {
    title: '기술',
    icon: <RadarChartOutlined />,
    to: 'skill',
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
  {
    title: '설정',
    icon: <SettingOutlined />,
    to: 'setting',
  },
]

type AdminLayoutProps = {
  children: React.ReactNode
  title?: string
  subtitle?: string
  actions?: React.ReactNode[]
}
function AdminLayout({ children, title, subtitle, actions = [] }: AdminLayoutProps) {
  const router = useRouter()
  const [visible, setVisible] = useState(false)

  const hasHeader = !!title || !!subtitle

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>이력서 관리</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.min.css"
          integrity="sha512-A0t6D8yn6CdUfczMxIyQEZPjdPd5SUKfemFRLAoMRfrGV9Had9p4B4b0ViJ6EtzbUCu5w6u6FwVDFECOwHQCAA=="
          crossOrigin="anonymous"
        />
      </Head>
      <Sider
        collapsible
        width={150}
        collapsed={visible}
        onCollapse={(collapsed) => setVisible(collapsed)}
      >
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
      <Layout style={{ maxHeight: '100vh', overflow: 'auto', paddingBottom: 16 }}>
        {hasHeader && (
          <PageHeader
            style={{ borderBottom: `1px solid ${palette.grey[200]}` }}
            ghost={false}
            title={title}
            subTitle={subtitle}
            extra={actions}
          />
        )}
        <Content style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16, overflow: 'auto' }}>
          {children}
        </Content>
      </Layout>

      <PreviewButton />
    </Layout>
  )
}

export default AdminLayout
