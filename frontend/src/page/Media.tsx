// import Carousel from "../Carousel/Carousel";
import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import BlogAPI from '../api'
import { useEffect, useState } from 'react'
import { NewsItem } from '../interface/request'
import { mediaSideMenu } from '../context/SideMenu'

const Media = () => {

  const [isNewsRecord, setIsNewsRecord] = useState<NewsItem[]>([])

  const fetchNewsData = async () => {
    try {
      const retv = await BlogAPI.fetchNewsList()
      setIsNewsRecord(retv)
    } catch (error) {
      console.log('news fail : ', error)
    }
  }

  useEffect(() => {
    fetchNewsData()
  }, [])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Media" menuList={mediaSideMenu} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="news" className="scroll-m-[260px]">
              <PageTitle title="News" page="Media" />
              <div className="mt-8">
                {isNewsRecord.map((p, index) => (
                  <div key={p.news_title + index} className="mt-8">
                    <div className="text-lg font-bold">
                      <a href={p.news_link} className="hover:decoration-solid hover:text-blue-800" target="_blank">
                        {index + 1 + '. ' + p.news_title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Media
