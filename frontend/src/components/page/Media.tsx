// import Carousel from "../Carousel/Carousel";
import SubSideMenu from '../SubSideMenu'
import PageTitle from '../PageTitle'
import { News } from '../../data/Media';
import { Youtubes } from '../../data/Media';

const Media = () => {
  const menuList = [
    { name: 'News', url: '#news' },
    { name: 'Youtube', url: '#youtube' },
  ]

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Media" menuList={menuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="news" className="scroll-m-[260px]">
              <PageTitle title="News" page="Media" />
              <div className="mt-8">
                {News.map(p => (
                  <div key={p.code} className='mt-8'>
                    <div className='text-lg font-bold'>
                      <a href={p.url} className='hover:decoration-solid hover:text-blue-800' target='_blank'>
                        {p.code +". "+ p.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="youtube" className="scroll-m-[260px]">
              <PageTitle title="Youtube" page="Media" />
              <div className='mt-8'>
                {Youtubes.map(p => (
                  <div key={p.code} className='mt-8'>
                    <div className='text-lg font-bold'>
                      <a href={p.url} className='hover:decoration-solid hover:text-blue-800' target='_blank'>
                        {p.code +". "+ p.title}
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
};

export default Media;
