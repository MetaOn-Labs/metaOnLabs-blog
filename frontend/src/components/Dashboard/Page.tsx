import Carousel from '../Carousel/Carousel'
import thumnail from '../../assets/concept/y_thum_1.png'

import image1 from '../../assets/images/main_carousel_1.png'
import image2 from '../../assets/images/main_carousel_2.png'
import moon from '../../assets/concept/moon3.jpg'
import yu from '../../assets/concept/yu.jpeg'
import kim from '../../assets/concept/kim.jpeg'
import park from '../../assets/concept/park.png'

import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate()

  const images = [image1, image2]

  const onClickMore = (url: string) => {
    navigate(url)
  }

  return (
    <main className="space-y-9 mb-20">
      <Carousel images={images} />
      <section className="flex justify-center">
        <h1 className="font-bold">Gastroenterology Labs AI Connecte Project</h1>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1 mx-auto">
            <div className="flex justify-between">
              <h2 className="text-2xl mb-4 font-bold">Publication</h2>
              <span onClick={() => onClickMore('research')} className="cursor-pointer">
                more
              </span>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
            </ul>
          </div>
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1  mx-auto lg:col-start-2">
            <div className="flex justify-between">
              <h2 className="text-2xl mb-4 font-bold">Solution & Software</h2>
              <span onClick={() => onClickMore('news')} className="cursor-pointer">
                more
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1 mx-auto mt-5">
            <h2 className="text-2xl mb-4 font-bold">Technology</h2>
            <ul className="space-y-2">
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
              <li className="flex justify-between cursor-pointer hover:text-gray-400">
                <span>2023년도 구성원학 연구원 모집</span> <span>2023-11-18</span>
              </li>
            </ul>
          </div>
          <div className="border border-gray-300 p-4 w-full min-w-96 h-[600px] col-start-1  mx-auto lg:col-start-2 mt-5">
            <h2 className="text-2xl mb-4 font-bold">Team</h2>
            <ul className="space-y-5">
              <li className="flex gap-3 cursor-pointer hover:text-gray-400 items-center">
                <div className="w-20 h-20 overflow-hidden rounded-[50%]">
                  <img src={moon} alt="team-image" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-500">Kyoung-min Moon</p>
                  <p className="text-gray-400 pl-2">Doctor</p>
                </div>
              </li>
              <li className="flex gap-3 cursor-pointer hover:text-gray-400 items-center">
                <div className="w-20 h-20 overflow-hidden rounded-[50%]">
                  <img src={kim} alt="team-image" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-500">Ji-eon Kim</p>
                  <p className="text-gray-400 pl-2">PL</p>
                </div>
              </li>
              <li className="flex gap-3 cursor-pointer hover:text-gray-400 items-center">
                <div className="w-20 h-20 overflow-hidden rounded-[50%]">
                  <img src={yu} alt="team-image" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-500">Yeong-ju Yu</p>
                  <p className="text-gray-400 pl-2">Deveoloper</p>
                </div>
              </li>
              <li className="flex gap-3 cursor-pointer hover:text-gray-400 items-center">
                <div className="w-20 h-20 overflow-hidden rounded-[50%]">
                  <img src={park} alt="team-image" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-500">Sang-hwan Park</p>
                  <p className="text-gray-400 pl-2">Developer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto"></section>
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
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
      </section>
    </main>
  )
}

export default Page
