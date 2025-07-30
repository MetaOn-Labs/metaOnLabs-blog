import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import { useEffect, useState } from 'react'
import BlogAPI from '../api'
import { PublicationsItem } from '../interface/request'

const Publication = () => {
  const menuList = [
    { name: 'Publications', url: '#publications' },
    { name: 'lectures', url: '#lectures' },
  ]

  const [isPublicationsRecord, setIsPublicationsRecord] = useState<PublicationsItem[]>([])

  const fetchPublicationData = async () => {
    try {
      const retv = await BlogAPI.fetchPulicationsList()
      setIsPublicationsRecord(retv)
    } catch (error) {
      console.error('publication 가져오기 실패:', error)
    }
  }

  useEffect(() => {
    fetchPublicationData()
  }, [])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Publication" menuList={menuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="publications" className="scroll-m-[260px]">
              <PageTitle title="publications" page="Publication" />
              <div className="mt-8 space-y-10 sm:space-y-16">
                {isPublicationsRecord.map((p, index) => (
                  <div className="grid md:gap-8 md:grid-cols-[300px_1fr] sm:gap-4" key={p.id}>
                    <div className="flex items-center">
                      <img src={`http://165.194.29.153/${p.publication_image}`} alt="image" className="w-full h-auto" />
                    </div>
                    <div key={p.id} className="md:mt-8 sm:mt-0">
                      <div className="text-lg font-bold">{index + 1 + '. ' + p.publication_title}</div>
                      <div className="mt-4 text-sm text-gray-500">{p.author}</div>
                      <div className="mt-2 text-sm text-gray-600">{p.doi}</div>
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

export default Publication
