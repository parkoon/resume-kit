import React from 'react'

import Anchor from '@Resume/components/atoms/Anchor'
import List from '@Resume/components/atoms/List'
import Space from '@Resume/components/atoms/Space'
import Title from '@Resume/components/atoms/Typography/Title'

function ArticleSection() {
  return (
    <Space section>
      <Title level={3} section secondary>
        ARTICLE
      </Title>
      <List>
        <Anchor href="#" title="Lorem ipsum dolor sit amet" />
        <Anchor href="#" title="consectetur adipisicing elit. A dolorem consectetur quo" />
        <Anchor href="#" title="exercitationem earum laborum aut atque" />
        <Anchor href="#" title="libero repellat provident magnam, porro, aliquid odio" />
      </List>
    </Space>
  )
}

export default ArticleSection
