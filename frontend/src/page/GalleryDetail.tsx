import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import BlogAPI from '../api'
import { useEffect, useState } from 'react'
import { mediaSideMenu } from '../context/SideMenu'
import { GalleryListItem } from '../interface/request'
import { useParams } from 'react-router-dom'
import { BLOG_GALLERY } from '../api/ApiUrl'

const GalleryDetail = () => {
  const param = useParams()
  const [iseRecord, setIseRecord] = useState<GalleryListItem | undefined>()

  const fetchData = async (gid: string) => {
    try {
      const retv = await BlogAPI.getData<GalleryListItem>(`${BLOG_GALLERY}/${gid}`, 'gallery')
      setIseRecord(retv)
    } catch (error) {
      console.log('gallery item fail : ', error)
    }
  }

  useEffect(() => {
    const gid = param.gid
    if (gid) {
      fetchData(gid)
    } else {
      window.history.back()
    }
  }, [param])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Media" menuList={mediaSideMenu} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="gallery" className="scroll-m-[260px]">
              <PageTitle title="Gallery" page="Media" />
              <div className="mt-8">
                {iseRecord && (
                  <div className="border-b border-gray-400 mb-10 p-5">
                    <div className="border-t border-b border-gray-400 flex mb-4">
                      <div className="bg-gray-300 px-3 py-2">제목</div>
                      <div className="px-3 py-2">{iseRecord.title}</div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: iseRecord.description }} />
                  </div>
                )}
                {/* <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'>
                  <div className='h-56 hover:cursor-pointer'>
                    <img src={image1} alt='image1' height={300}/>
                    <p className=''>123sdfzxvlj</p>
                  </div>
                  <div className='h-56'>
                    <img src={image1} alt='image1' height={300}/>
                    <p className=''>123sdfzxvlj</p>
                  </div>
                  <div className='h-56'>
                    <img src={image1} alt='image1' height={300}/>
                    <p className=''>123sdfzxvlj</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GalleryDetail
