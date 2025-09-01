import React from 'react'
import { Map, Marker } from '@vis.gl/react-google-maps'
import { useNavigate } from 'react-router-dom'

import Carousel from '../components/Carousel'
import DashboardTitle from '../components/DashboardTitle'
import TeamCard from '../components/TeamCard'
import Contact from '../components/Contact'
import YoutubeThumbnailCard from '../components/YoutubeThumbnailCard'
import { SectionLayout } from '../components/layout/Layout'

import image1 from '../assets/images/main_carousel_1_1.png'
import image2 from '../assets/images/main_carousel_2.png'
import CoworkerCard from '../components/CoworkerCard'



const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  const images = [image1, image2]

  const onClickMore = (url: string) => {
    navigate(url)
  }

  return (
    <main className="space-y-9 overflow-x-hidden">
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
        <CoworkerCard onClickMore={onClickMore}/>
      </SectionLayout>
      <div className="h-20" />
      <SectionLayout>
        <DashboardTitle section="YOUTUBE" heading="">
          <span />
        </DashboardTitle>
        <YoutubeThumbnailCard onClickMore={onClickMore} />
      </SectionLayout>
      <div className="h-20" />
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="p-5 w-[500px]">
          <Contact />
        </div>
        <div className="pt-8">
          <Map
            defaultZoom={15}
            defaultCenter={{ lat: 37.50672, lng: 126.960733 }}
            style={{ height: '620px', width: '500px' }}
          >
            <Marker position={{ lat: 37.50672, lng: 126.960733 }} clickable={false} draggable={false} />
          </Map>
          <span className="text-sm text-gray-500 pl-4 pt-4">서울특별시 동작구 흑석로 102 중앙대학교병원</span>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
