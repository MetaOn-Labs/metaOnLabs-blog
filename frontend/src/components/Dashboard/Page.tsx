import Carousel from '../Carousel'
// import thumnail from '../../assets/concept/y_thum_1.png'
import { Button, Card, CardBody } from '@material-tailwind/react'

import image1 from '../../assets/images/main_carousel_1.png'
import image2 from '../../assets/images/main_carousel_2.png'

import cau from '../../assets/agency/cau.png'
import aitrics from '../../assets/agency/aitrics.png'
import kit from '../../assets/agency/kit.png'
import vuno from '../../assets/agency/vuno.png'
import yonse from '../../assets/agency/yonse.png'
import zoivision from '../../assets/agency/zoivision.png'

import { useNavigate } from 'react-router-dom'

import DashboardTitle from '../DashboardTitle'
import TeamCard from '../TeamCard'
import YoutubeThumbnailCard from '../YoutubeThumbnailCard'
import { SectionLayout } from '../layout/Layout'

const Page = () => {
  const navigate = useNavigate()

  const images = [image1, image2]

  const onClickMore = (url: string) => {
    navigate(url)
  }

  return (
    <main className="space-y-9 mb-20 overflow-x-hidden">
      {/* <section className="absolute z-30 top-1/2 mt-20 text-white w-full text-center">
        <h1 className="font-bold">Respiratory Labs AI Connecte Project</h1>
      </section> */}
      <Carousel images={images} />
      <div className="h-20" />
      <SectionLayout>
        <DashboardTitle section="Our Team" heading="Actionable ideas and insights from industry leaders">
          <span />
        </DashboardTitle>
        <TeamCard />
      </SectionLayout>
      <div className="h-20" />
      <SectionLayout>
        <DashboardTitle section="Co-Working" heading="Working Together for a Better Tomorrow">
          <span />
        </DashboardTitle>
        <div className="flex flex-col justify-center md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card
              shadow={true}
              color="transparent"
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img src={zoivision} alt="logo" className="w-full " />
              </CardBody>
            </Card>
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> */}
                <img src={vuno} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img src={cau} alt="logo" className="w-full " />
              </CardBody>
            </Card>
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> */}
                <img src={yonse} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> */}
                <img src={kit} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> */}
                <img src={aitrics} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
          </div>
        </div>
        <Button
          className="mt-6 mx-auto flex"
          variant="outlined"
          onClick={() => onClickMore('/team#institution')}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          see all co-working
        </Button>
      </SectionLayout>
      <div className="h-20" />
      <SectionLayout>
        <DashboardTitle section="YOUTUBE" heading="">
          <span />
        </DashboardTitle>
        <YoutubeThumbnailCard />
        {/* <TeamCard /> */}
      </SectionLayout>
      {/* <SectionLayout>
        <div className="flex gap-5 overflow-x-auto items-center">
          <div className="font-semibold text-[26px] text-gray-light pr-4 border-r">YouTube</div>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="text-center shadow cursor-pointer hover:opacity-75">
                <img src={thumnail} alt="YouTube Thumbnail" />
              </div>
            ))}
        </div>
      </SectionLayout> */}
    </main>
  )
}

export default Page
