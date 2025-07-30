<<<<<<< HEAD
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
>>>>>>> 3695e21 (Topic : 슬랙 token Env)
import DashboardTitle from '../DashboardTitle'
import { SectionLayout } from '../layout/Layout'
import { Card } from '@material-tailwind/react'

const Contact = () => {
<<<<<<< HEAD
=======
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const onClickSend = async () => {
    const url = import.meta.env.VITE_SLACK_WEBHOOK_URL
    const body = {
      text: `📤 *Blog contact 알림*\n• name: ${formValue.name}\n• email: ${formValue.email}\n• modality: ${formValue.organization}\n• message: ${formValue.message}`,
    }
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(({ status }: any) => {
      if (status === 200) {
        window.alert('성공적으로 보내졌습니다.')
        setFormValue({
          name: '',
          email: '',
          organization: '',
          message: '',
        })
      } else {
        window.alert('메세지 전송에 실패하였습니다.')
      }
    }).catch((err) => {
      console.log(err)
      window.alert('메세지 전송에 실패하였습니다.')
    })
  }

  const onChangeFormValue = (e: any) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  // const onClickSend = async () => {
  // const result = await web.chat.postMessage({
  //   text: 'hello world',
  //   channel: id
  // })
  // console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
  // }

>>>>>>> 3695e21 (Topic : 슬랙 token Env)
  return (
    <SectionLayout>
      <DashboardTitle section="CONTACT" heading="Need to get in touch?">
        <span />
      </DashboardTitle>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Card
          className="w-full h-full"
          shadow={true}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Message" />
              <button type="submit">Submit</button>
            </form>
        </Card>
      </div>
    </SectionLayout>
  )
}

export default Contact
