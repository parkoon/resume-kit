import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'

function SkillSection() {
  return (
    <Space section>
      <Title level={3} section secondary>
        SKILL
      </Title>
      <Description
        left={<Text size="xl">Frontend</Text>}
        right={
          <List
            column={3}
            items={['React.js', 'HTML/CSS', 'Javascript', 'Node', 'WebRTC', 'SocketIO']}
          />
        }
      />
      <Description
        left={<Text size="xl">Backend</Text>}
        right={
          <List
            column={3}
            items={['React.js', 'HTML/CSS', 'Javascript', 'Node', 'WebRTC', 'SocketIO']}
          />
        }
      />
      <Description
        gutter={0}
        left={<Text size="xl">Database</Text>}
        right={
          <List
            column={3}
            items={['React.js', 'HTML/CSS', 'Javascript', 'Node', 'WebRTC', 'SocketIO']}
          />
        }
      />
    </Space>
  )
}

export default SkillSection
