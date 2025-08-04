// import Carousel from "../Carousel/Carousel";
import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
// import BlogAPI from '../api'
// import { useEffect, useState } from 'react'
// import { YoutubeItem } from '../interface/request'
import { mediaSideMenu } from '../context/SideMenu'

const Gallery = () => {

  // const [isYoutubeRecord, setIsYoutubeRecord] = useState<YoutubeItem[]>([])

  // const fetchYoutubeData = async () => {
  //   try {
  //     const retv = await BlogAPI.fetchYoutubeList()
  //     setIsYoutubeRecord(retv)
  //   } catch (error) {
  //     console.log('news fail : ', error)
  //   }
  // }

  // useEffect(() => {
  //   fetchYoutubeData()
  // }, [])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Media" menuList={mediaSideMenu} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="gallery" className="scroll-m-[260px]">
              <PageTitle title="Gallery" page="Media" />
              <div className="mt-8">
                {/* {isYoutubeRecord.map((p, index) => (
                  <div key={p.youtube_title + index} className="mt-8">
                    <div className="text-lg font-bold">
                      <a href={p.youtubue_link} className="hover:decoration-solid hover:text-blue-800" target="_blank">
                        {index + 1 + '. ' + p.youtube_title}
                      </a>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallery
