import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import BlogAPI from '../api'
import { useEffect, useState } from 'react'
import { noticeMenuList } from '../context/SideMenu'
import { NoticeItem } from '../interface/request'
import { useParams } from 'react-router-dom'
import { BLOG_NOTICE } from '../api/ApiUrl'

const NoticeDetail = () => {
  const param =  useParams()
  const [iseRecord, setIseRecord] = useState<NoticeItem | undefined>()

  const fetchData = async (nid: string) => {
    try {
      const retv = await BlogAPI.getData<NoticeItem>(`${BLOG_NOTICE}/${nid}`, 'notice')
      setIseRecord(retv)
    } catch (error) {
      console.log('notice item fail : ', error)
    }
  }

  useEffect(() => {
    const nid = param.nid
    if (nid) {
      fetchData(nid)
    } else {
      window.history.back()
    }
  }, [param])

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Notice" menuList={noticeMenuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="notice-detail" className="scroll-m-[260px]">
              <PageTitle title="Notice" page="Notice" />
              <div className="mt-8">
                {iseRecord && (
                <div className='border-b border-gray-400 mb-10 p-5'>
                  <div className='border-t border-b border-gray-400 flex mb-4'>
                    <div className='bg-gray-300 px-3 py-2'>제목</div>
                    <div className='px-3 py-2'>{iseRecord.notice_title}</div>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: iseRecord.notice_contents}}/>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NoticeDetail;