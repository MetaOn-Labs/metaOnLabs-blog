import Carousel from '../Carousel'
// import thumnail from '../../assets/concept/y_thum_1.png'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'

import image1 from '../../assets/images/main_carousel_1.png'
import image2 from '../../assets/images/main_carousel_2.png'

import { useNavigate } from 'react-router-dom'

import DashboardTitle from '../DashboardTitle'
import TeamCard from '../TeamCard'
import YoutubeThumbnailCard from '../YoutubeThumbnailCard'

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
      <div className='h-20'/>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <DashboardTitle section="Our Team" heading="Actionable ideas and insights from industry leaders" ><span /></DashboardTitle>
        <TeamCard />
      </section>
      <div className='h-20'/>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <DashboardTitle section="Co-Working" heading="Working Together for a Better Tomorrow"><span /></DashboardTitle>
        <div className="flex flex-col justify-center md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  coinbase.com
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-amazon.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  amazon.com
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardBody className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <img
                src="https://www.material-tailwind.com/logos/logo-netflix.svg"
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4">
              netflix.com
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal lg:max-w-[16rem]">
              &quot;It have broadened our horizons and helped me advance my career. The community is incredibly supportive &quot;
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-spotify.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  spotify.com
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-google.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  google.com
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
          <Button className="mt-6 mx-auto flex" variant="outlined" onClick={() => onClickMore('/team#institution')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>see all projects</Button>
      </section>
      <div className='h-20'/>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <DashboardTitle section="YOUTUBE" heading=""><span /></DashboardTitle>
        <YoutubeThumbnailCard />
        {/* <TeamCard /> */}
      </section>
      {/* <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
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
      </section> */}
    </main>
  )
}

export default Page
