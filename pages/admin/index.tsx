import React from 'react'
import { useRouter } from 'next/router'
import { Result, Button } from 'antd'
import AdminLayout from '@Admin/layout'

function Home() {
  const router = useRouter()
  return (
    <AdminLayout>
      <Result
        status="404"
        title="404"
        subTitle="존재하지 않는 페이지입니다."
        extra={
          <Button type="primary" onClick={() => router.push('/admin/profile')}>
            프로필 작성하러 하기
          </Button>
        }
        style={{ marginTop: 120 }}
      />
    </AdminLayout>
  )
}

export default Home
