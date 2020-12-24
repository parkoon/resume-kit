import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'

function ProjectSection() {
  return (
    <Space bottom={32}>
      <Title level={2} letterSpacing={2} style={{ marginBottom: 20 }}>
        PROJECT
      </Title>
      <Description
        gutter={24}
        left={<Text size="xl">2020. 10 ~ 2020. 11</Text>}
        right={
          <>
            <Text block size="xl">
              Lorem ipsum
            </Text>
            <Text italic>dolor, sit amet consectetur adipisicing elit</Text>
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
              Lorem ipsum
            </Text>
            <Text italic>dolor, sit amet consectetur adipisicing elit</Text>
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
              Lorem ipsum
            </Text>
            <Text italic>dolor, sit amet consectetur adipisicing elit</Text>
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

export default ProjectSection
