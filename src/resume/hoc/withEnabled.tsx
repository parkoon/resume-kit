import React from 'react'
import { usePayload } from '@Resume/context/PayloadContext'

type Section = 'article' | 'career' | 'education' | 'etc' | 'profile' | 'project' | 'skill'
function withEnabled<P>(section: Section, WrappedComponent: React.ComponentType<P>) {
  const ComponentWithEnabled = (props: P) => {
    const {
      system: {
        data: { enabled },
      },
    } = usePayload()

    if (!enabled[section]) return null

    return <WrappedComponent {...props} />
  }
  return ComponentWithEnabled
}
export default withEnabled
