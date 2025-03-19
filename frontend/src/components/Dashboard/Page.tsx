import Carousel from '../Carousel'
import thumnail from '../../assets/concept/y_thum_1.png'

import image1 from '../../assets/images/main_carousel_1.png'
import image2 from '../../assets/images/main_carousel_2.png'

import { useNavigate } from 'react-router-dom'
import TeamCard from '../page/TeamCard'

const Page = () => {
  const navigate = useNavigate()

  const images = [image1, image2]

  const onClickMore = (url: string) => {
    navigate(url)
  }

  return (
    <main className="space-y-9 mb-20 overflow-x-hidden">
      <Carousel images={images} />
      <section className="flex justify-center">
        <h1 className="font-bold">
        Respiratory Labs AI Connecte Project</h1>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <TeamCard />
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
