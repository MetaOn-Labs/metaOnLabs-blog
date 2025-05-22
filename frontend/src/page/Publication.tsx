import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import { publications } from '../data/Publications'
import { Lectures } from '../data/Lectures'

const Publication = () => {
  const menuList = [
    { name: 'Publications', url: '#publications' },
    { name: 'lectures', url: '#lectures' },
  ]

  // console.log(Lectures)

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Publication" menuList={menuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="publications" className="scroll-m-[260px]">
              <PageTitle title="publications" page="Publication" />
              <div className="mt-8 space-y-10 sm:space-y-16">
                {publications.map((p) => (
                  <div className="grid md:gap-8 md:grid-cols-[300px_1fr] sm:gap-4">
                    <div className="flex items-center">
                      <img src={p.image} alt="image" className="w-full h-auto" />
                    </div>
                    <div key={p.code} className="md:mt-8 sm:mt-0">
                      <div className="text-lg font-bold">{p.code + '. ' + p.title}</div>
                      <div className="mt-4 text-sm text-gray-500">{p.author}</div>
                      <div className="mt-2 text-sm text-gray-600">{p.publication}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="lectures" className="scroll-m-[260px]">
              <PageTitle title="lectures" page="Publication" />
              <div className="mt-8">
                {Lectures.map((l) => {
                  const keys = Object.keys(l)
                  // console.log(entries)
                  return (
                    <div key={keys[0]} className="mt-8">
                      <div className="text-3xl font-extrabold">{keys[0]}</div>
                      <div className="mt-4">
                        {l[keys[0]].map((e) => (
                          <div key={e.code} className="mt-8">
                            <div className="text-gray-500 font-bold">{e.date}</div>
                            <div className="text-lg font-semibold mt-2">{e.title}</div>
                            <div className="mt-2 text-gray-500">{e.korTitle}</div>
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

export default Publication
