/* eslint-disable @typescript-eslint/no-explicit-any */
import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import BlogAPI from '../api'
import { useEffect, useState } from 'react'
import { NoticeItem } from '../interface/request'
import { noticeMenuList } from '../context/SideMenu'
import { BLOG_NOTICE } from '../api/ApiUrl'
import { IconButton } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

const Notice = () => {
  const navigate = useNavigate();

  const [isRecord, setIsRecord] = useState<NoticeItem[]>([])
  const [active, setActive] = useState(1)

  const fetchData = async () => {
    try {
      const retv = await BlogAPI.getData<NoticeItem[]>(BLOG_NOTICE, '')
      setIsRecord(retv)
    } catch (error) {
      console.log(' fail : ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getItemProps = (index) =>
    ({
      variant: 'text',
      color: active === index ? 'orange' : 'gray',
      onClick: () => setActive(index),
      size: "lg",
    } as any)

  const PaginationRender = () => {
    const count = Math.ceil(isRecord.length / 10)
    const arr = Array.from({length:count}, (v,i)=>i+1); 
    return arr.map((a) => <IconButton {...getItemProps(a)} key={a}>{a}</IconButton>)
  } 

  const onRowClick = (nid: number) => {
    navigate(`/notice/${nid}`)
  }

  return (
    <main className="space-y-9 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Notice" menuList={noticeMenuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="notice" className="scroll-m-[260px]">
              <PageTitle title="Notice" page="Notice" />
              <div className="mt-8 min-h-96">
                <table className="w-full text-center border-t border-b border-gray-400">
                  <thead>
                    <tr className="bg-gray-200 border-b border-gray-400">
                      <th className="py-2">번호</th>
                      <th className="w-2/3">제목</th>
                      <th>등록일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isRecord.slice(active * 10 - 10, active * 10).map((p) => (
                      <tr key={p.id} className="border-b border-gray-400 hover:bg-gray-50 hover:cursor-pointer" onClick={() => onRowClick(p.id)}>
                        <td className="py-2">{p.id}</td>
                        <td>{p.notice_title}</td>
                        <td>{p.created_at.split('T')[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* {isRecord.map((p, index) => (
                  <div key={p.id} className="mt-8">
                    <a
                      href={`/notice/${p.id}`}
                      className="hover:decoration-solid hover:text-blue-800"
                      target="_blank"
                    >
                      <div className="text-lg font-bold">{index + 1 + '. ' + p.notice_title}</div>
                      <span>{p.created_at}</span>
                    </a>
                  </div>
                ))} */}
              </div>
              <div className='flex justify-center mt-5'>
                <div className="flex items-center gap-2">
                  {PaginationRender()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Notice
