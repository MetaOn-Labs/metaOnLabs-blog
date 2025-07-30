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
import Contact from '../Contact'
import { Map, Marker } from '@vis.gl/react-google-maps'

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
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <img src={zoivision} alt="logo" className="w-full " />
              </CardBody>
            </Card>
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody> */}
              <img src={vuno} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <img src={cau} alt="logo" className="w-full " />
              </CardBody>
            </Card>
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody> */}
              <img src={yonse} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody> */}
              <img src={kit} alt="logo" className="w-full " />
              {/* </CardBody> */}
            </Card>
            <Card
              shadow={true}
              className="px-10 w-80 h-48 justify-center"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* <CardBody> */}
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
          onResize={undefined}
          onResizeCapture={undefined}
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
      </SectionLayout>
      <div className="h-20" />
      <Contact />
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <Map
          defaultZoom={15}
          defaultCenter={{ lat: 37.50672, lng: 126.960733 }}
          // onCameraChanged={(ev: MapCameraChangedEvent) =>
          //   console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          // }
          style={{ height: '300px', width: '500px' }}
        >
          <Marker position={{ lat: 37.50672, lng: 126.960733 }} clickable={false} draggable={false}/>
        </Map>
      </section>
    </main>
  )
}

export default Page
