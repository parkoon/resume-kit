import { Divider } from 'antd'

type GuideSectionProps = {
  title: string
  children: React.ReactNode
  titleStyle?: React.CSSProperties
}
function GuideSection({ title, children, titleStyle }: GuideSectionProps) {
  return (
    <>
      <h3 style={titleStyle}>{title}</h3>
      <p>{children}</p>
      <Divider style={{ margin: '12px 0' }} />
    </>
  )
}

export default GuideSection
