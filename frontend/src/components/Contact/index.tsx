/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import DashboardTitle from '../DashboardTitle'
import { SectionLayout } from '../layout/Layout'
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'

const Contact = () => {
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

  return (
    <SectionLayout>
      <DashboardTitle section="CONTACT" heading="Need to get in touch?">
        <span />
      </DashboardTitle>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Name
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              value={formValue.name}
              onChange={onChangeFormValue}
              name="name"
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Email
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              value={formValue.email}
              onChange={onChangeFormValue}
              name="email"
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Organization
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              value={formValue.organization}
              onChange={onChangeFormValue}
              name="organization"
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Message
            </Typography>
            <Textarea
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              value={formValue.message}
              onChange={onChangeFormValue}
              name="message"
            />
          </div>
          <Button
            className="mt-6"
            fullWidth
            onClick={onClickSend}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Send
          </Button>
        </form>
      </div>
    </SectionLayout>
  )
}

export default Contact
