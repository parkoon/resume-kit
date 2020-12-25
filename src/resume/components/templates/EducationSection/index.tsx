import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'

function EducationSection() {
  return (
    <Space section>
      <Title level={3} section secondary>
        EDUCATION
      </Title>
      <Description
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text size="xl" block>
              OO대학교
            </Text>
            <Text italic>컴퓨터 공학과 (학사)</Text>
          </>
        }
      />
      <Description
        gutter={0}
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text block size="xl">
              OO대학교
            </Text>
            <Text italic>컴퓨터 공학과 (학사)</Text>
          </>
        }
      />
    </Space>
  )
}

export default EducationSection
