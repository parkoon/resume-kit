import { Card } from 'antd'
import AdminLayout from '@Admin/components/AdminLayout'
import EditableTextField from '@Admin/components/EditableTextField'
import {
  FacebookFilled,
  GithubFilled,
  HomeFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  MessageFilled,
  PhoneFilled,
  SnippetsFilled,
  ToolFilled,
  TwitterCircleFilled,
  UserOutlined,
  YoutubeFilled,
} from '@ant-design/icons'

function IntroduceManagement() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <AdminLayout title="내가 누구인가" subtitle="this is subtitle">
      <Card>
        <EditableTextField
          icon={<UserOutlined />}
          placeholder="이름"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<ToolFilled />}
          placeholder="분야 (ex, 프론트엔드 개발자)"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<MailFilled />}
          placeholder="이메일"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<GithubFilled />}
          placeholder="깃허브"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<LinkedinFilled />}
          placeholder="링크드인"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<FacebookFilled />}
          placeholder="페이스북"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<YoutubeFilled />}
          placeholder="유튜브"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<SnippetsFilled />}
          placeholder="개인블로그"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<PhoneFilled />}
          placeholder="핸드폰번호"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<InstagramFilled />}
          placeholder="인스타그램"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<TwitterCircleFilled />}
          placeholder="트위터"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<HomeFilled />}
          placeholder="개인홈페이지"
          initialValue=""
          onSave={(value) => console.log(value)}
        />
        <EditableTextField
          icon={<MessageFilled />}
          type="textarea"
          placeholder="자기소개"
          initialValue="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione impedit laborum
          perspiciatis doloribus cum id temporibus, voluptate sint deleniti repellendus, hic, illo
          iusto quam maxime in eius saepe labore modi."
          onSave={(value) => console.log(value)}
        />
      </Card>
    </AdminLayout>
  )
}

export default IntroduceManagement
