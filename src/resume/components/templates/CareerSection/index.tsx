import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'

function CareerSection() {
  return (
    <Space section>
      <Title section>CAREER</Title>
      <Description
        gutter={24}
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text block size="xl">
              구글 코리아
            </Text>
            <Text italic>화장실 창문 청소</Text>
            <Space top={12}>
              <List
                items={[
                  'amet consectetur adipisicing elit',
                  'molestias laborum praesentium quaerat consequatur facilis minima.',
                  'Natus in suscipit beatae laudantium! Repudiandae rerum quia',
                  'iste cumque dolore doloribus ipsa tempore libero, ',
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                ]}
              />
            </Space>
          </>
        }
      />
      <Description
        gutter={24}
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text block size="xl">
              애플
            </Text>
            <Text italic>사과를 어떻게 하면 이쁘게 깎을수 있는지 연구소장</Text>
            <Space top={12}>
              <List
                items={[
                  'amet consectetur adipisicing elit',
                  'molestias laborum praesentium quaerat consequatur facilis minima.',
                  'Natus in suscipit beatae laudantium! Repudiandae rerum quia',
                  'iste cumque dolore doloribus ipsa tempore libero, ',
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                ]}
              />
            </Space>
          </>
        }
      />
    </Space>
  )
}

export default CareerSection
