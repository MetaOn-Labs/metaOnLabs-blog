import DashboardTitle from '../DashboardTitle'
import { SectionLayout } from '../layout/Layout'
import { Card } from '@material-tailwind/react'

const Contact = () => {
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
