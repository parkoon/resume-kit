import React from 'react'
import { Button, Typography } from 'antd'

import useDeploy from '@Admin/hooks/useDeploy'
import Space from '@Resume/components/atoms/Space'

const { Text, Link } = Typography

function DeployForm() {
  const { loading, result, error, deploy } = useDeploy()
  return (
    <>
      <Button loading={loading} onClick={deploy}>
        배포하기
      </Button>
      <Space top={4}>
        {error && (
          <Text type="danger">배포에 실패했습니다. 프로젝트를 실행한 커맨드를 확인해주세요.</Text>
        )}
        {result && (
          <>
            <Link href={result} target="_blank">
              이력서 확인하기
            </Link>
            <Text style={{ fontSize: '1.2rem' }} type="secondary">
              (배포 후 반영까지 1분 정도 걸립니다.)
            </Text>
          </>
        )}
      </Space>
    </>
  )
}

export default DeployForm
