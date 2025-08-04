import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import { useEffect, useState } from 'react'
import BlogAPI from '../api'
import { LectureItem } from '../interface/request'
import { publicationSideMenu } from '../context/SideMenu'

const Lectures = () => {
  const [isLectureRecord, setIsLectureRecord] = useState<LectureItem[]>([])
  const [years, setYears] = useState<string[]>([])

  const fetchLectureData = async () => {
    try {
      const retv = await BlogAPI.fetchLectureList()
      setIsLectureRecord(retv)
      const year = [...new Set(retv.map((obj) => obj.lecture_date.slice(0, 4)))]
      // console.log(retv.map(obj => obj.lecture_date.slice(0,4)))
      // console.log(year)
      setYears(year)
    } catch (error) {
      console.error('뉴스 가져오기 실패:', error)
    }
  }

  useEffect(() => {
    fetchLectureData()
  }, [])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Publication" menuList={publicationSideMenu} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="lectures" className="scroll-m-[260px]">
              <PageTitle title="lectures" page="Publication" />
              <div className="mt-8">
                {years.map((year) => {
                  // const keys = Object.keys(l)
                  // console.log(entries)
                  return (
                    <div key={year} className="mt-8">
                      <div className="text-3xl font-extrabold">{year}</div>
                      <div className="mt-4">
                        {isLectureRecord
                          .filter((item) => item.lecture_date.slice(0, 4) === year)
                          .map((e) => (
                            <div key={e.id} className="mt-8">
                              <div className="text-gray-500 font-bold">{e.lecture_date}</div>
                              <div className="text-lg font-semibold mt-2">{e.lecture_title}</div>
                              <div className="mt-2 text-gray-500">{e.lecture_description}</div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Lectures
