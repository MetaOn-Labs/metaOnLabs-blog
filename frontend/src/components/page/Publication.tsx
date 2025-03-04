import SubSideMenu from '../SubSideMenu'
import PageTitle from '../PageTitle'

const Publication = () => {
  const menuList = [
    { name: 'Publications', url: '#publications' },
    { name: 'lectures', url: '#lectures' },
  ]

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Team" menuList={menuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="publications" className="scroll-m-[260px]">
              <PageTitle title="publications" page="Publication" />
            </div>
            <div id="lectures" className="scroll-m-[260px]">
              <PageTitle title="lectures" page="Publication" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Publication
