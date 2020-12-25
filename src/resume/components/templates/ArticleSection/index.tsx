import React from 'react'
import Description from '@Resume/components/atoms/Description'
import Title from '@Resume/components/atoms/Typography/Title'
import Text from '@Resume/components/atoms/Typography/Text'
import Space from '@Resume/components/atoms/Space'
import List from '@Resume/components/atoms/List'
import Anchor from '@Resume/components/atoms/Anchor'

function ArticleSection() {
  return (
    <Space section>
      <Title section>ARTICLE</Title>
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
