import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import BlogAPI from '../api'
import { useEffect, useState } from 'react'
import { GalleryListItem } from '../interface/request'
import { mediaSideMenu } from '../context/SideMenu'
import { BLOG_GALLERY } from '../api/ApiUrl'

const Gallery = () => {
  const [iseRecord, setIseRecord] = useState<GalleryListItem[]>([])

  const fetchData = async () => {
    try {
      const retv = await BlogAPI.getData<GalleryListItem[]>(BLOG_GALLERY, 'gallery')
      setIseRecord(retv)
    } catch (error) {
      console.log('news fail : ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Media" menuList={mediaSideMenu} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="gallery" className="scroll-m-[260px]">
              <PageTitle title="Gallery" page="Media" />
              <div className="mt-8">
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'>
                  {iseRecord.map((recode) => (
                    <div className='h-56 hover:cursor-pointer' key={recode.id}>
                      <a href={`/media/gallery/${recode.id}`}>
                        <img src={recode.file_url} alt={recode.original_name} height={'300px'}/>
                        <p className=''>{recode.title}</p>
                      </a>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallery
