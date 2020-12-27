import React from 'react'

import Anchor from '@Resume/components/atoms/Anchor'
import List from '@Resume/components/atoms/List'
import Space from '@Resume/components/atoms/Space'
import Title from '@Resume/components/atoms/Typography/Title'
import { usePayload } from '@Resume/context/PayloadContext'
import withEnabled from '@Resume/hoc/withEnabled'

type ArticleSectionProps = {
  sort: number
}
function ArticleSection(props: ArticleSectionProps) {
  const {
    article: { data },
  } = usePayload()
  return (
    <Space section>
      <Title level={3} section secondary>
        ARTICLE
      </Title>
      <List>
        {data.map(({ title, url, id }) => (
          <Anchor key={id} href={url} title={title} />
        ))}
      </List>
    </Space>
  )
}

export default withEnabled('article', ArticleSection)
