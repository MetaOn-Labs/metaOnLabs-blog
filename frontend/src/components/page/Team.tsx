import React from 'react'
import SubSideMenu from '../SubSideMenu'
import PageTitle from '../PageTitle'
import moon from '../../assets/concept/moon2.jpeg'
import yu from '../../assets/concept/yu.jpeg'
import kim from '../../assets/concept/kim.jpeg'
import park from '../../assets/concept/park.png'

const TeamComponent: React.FC = () => {
  const menuList = [
    { name: 'M.D', url: '#md' },
    { name: 'engineer', url: '#engineer' },
  ]
  const edu = ['을지대학교 대학원 의학박사 (내과학)', '을지대학교 대학원 의학석사 (내과학)', '충남대학교 의과대학 학사']
  const carrer = [
    '(현) 중앙대학교병원 전산담당(부실장)',
    '(현) 중앙대학교병원 호흡기알레르기내과 임상부교수',
    '울산의과대학 호흡기알레르기내과 부교수',
    '서울아산병원 임상강사',
    '을지대학병원 임상강사',
    '건양대학병원 임상강사',
    '을지대학병원 내과 레지던트',
    '을지대학병원 인턴',
  ]
  const arward = ['2023.11 대한결핵 및 호흡기학회 제136차 추계학술대회 융합연구상']
  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Team" menuList={menuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="md" className='scroll-m-[260px]'>
              <PageTitle title="M.D" page="team" />
              <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                <div className="w-60 h-60 overflow-hidden ">
                  <img src={moon} alt="team-image" />
                </div>
                <div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                      문경민 <p className="text-gray-400">M.D Ph.d</p>
                    </h2>
                  </div>
                  <div className="mt-16 ml-4">
                    <h2 className="text-xl font-bold text-gray-500">학력</h2>
                    <ul className="mt-4 ml-4 space-y-2 text-gray-400 text-sm">
                      {edu.map((e, i) => (
                        <li key={i} className="font-semibold">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-16 ml-4">
                    <h2 className="text-xl font-bold text-gray-500">경력 및 연수</h2>
                    <ul className="mt-4 ml-4 space-y-2 text-gray-400 text-sm">
                      {carrer.map((e, i) => (
                        <li key={i} className="font-semibold">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-16 ml-4">
                    <h2 className="text-xl font-bold text-gray-500">수상 내역</h2>
                    <ul className="mt-4 ml-4 space-y-2 text-gray-400 text-sm">
                      {arward.map((e, i) => (
                        <li key={i} className="font-semibold">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="engineer" className='scroll-m-40'>
              <PageTitle title="engineer" page="team" />
              <div >
                <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                  <div className="w-60 h-60 overflow-hidden">
                    <img src={kim} alt="team-image" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                      김지언<p className="text-gray-400">AI ∙ Software</p>
                    </h2>
                  </div>
                  <div className="mt-16 ml-4"></div>
                </div>
                <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                  <div className="w-60 h-60 overflow-hidden">
                    <img src={yu} alt="team-image" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                      유영주<p className="text-gray-400">Software</p>
                    </h2>
                  </div>
                  <div className="mt-16 ml-4"></div>
                </div>
                <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                  <div className="w-60 h-60 overflow-hidden">
                    <img src={park} alt="team-image" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                      박상환<p className="text-gray-400">Software</p>
                    </h2>
                  </div>
                  <div className="mt-16 ml-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TeamComponent
