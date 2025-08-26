import React from 'react'
import SubSideMenu from '../components/SubSideMenu'
import PageTitle from '../components/PageTitle'
import moon_cau from '../assets/concept/moon2.jpeg'
import kim_cau from '../assets/concept/kim_cau.png'
import woo_cau from '../assets/concept/woo_cau.png'
import yu from '../assets/concept/yu.jpeg'
// import kim from '../assets/concept/kim.png'
import park from '../assets/concept/park.jpeg'
import jang from '../assets/concept/jang.png'
import { teamMenuList } from '../context/SideMenu'

const mdData = [
  {
    name: '문경민',
    image: moon_cau,
    edu: ['을지대학교 대학원 의학박사 (내과학)', '을지대학교 대학원 의학석사 (내과학)', '충남대학교 의과대학 학사'],
    carrer: [
      '(현) 중앙대학교병원 전산담당(부실장)',
      '(현) 중앙대학교병원 호흡기알레르기내과 임상부교수',
      '울산의과대학 호흡기알레르기내과 부교수',
      '서울아산병원 임상강사',
      '을지대학병원 임상강사',
      '건양대학병원 임상강사',
      '을지대학병원 내과 레지던트',
      '을지대학병원 인턴',
    ],
    arward: ['2023.11 대한결핵 및 호흡기학회 제136차 추계학술대회 융합연구상'],
  },
  {
    name: '김동훈',
    image: kim_cau,
    edu: ['아주대학교 의과대학원 졸업 (석사)', '아주대학교 의과대학 졸업 (학사)'],
    carrer: [
      '중앙대학교병원 호흡기알레르기내과 임상부교수',
      '삼성서울병원 중환자의학과 전임의',
      '분당서울대병원 순환기내과 전임의',
      '아주대병원 내과 레지던트',
      '아주대병원 인턴',
    ],
    arward: ['2018.11 보건복지부 장관 표창(감염병 관리)', '2021.04 국무총리표창(코로나 중환자 진료)'],
  },
  {
    name: '우수현',
    image: woo_cau,
    edu: [
      '중앙대학교 대학원 의학과 (박사수료)',
      '중앙대학교 의학전문대학원 (석사)',
      '서울대학교 자연과학대학 화학부 (학사)',
    ],
    carrer: [
      '중앙대학교병원 성형외과 조교수',
      '중앙대학교병원 성형외과 임상조교수',
      '서울아산병원 성형외과 임상강사',
      '중앙대학교병원 성형외과 레지던트',
      '중앙대학교병원 인턴',
      'New York University Langone Medical Center 단기연수',
    ],
    arward: [
      '2023 대한말초신경수술학회 최우수 학술상',
      '2022 대한안면신경학회 학술상',
      '2017 대한성형외과학회 기초재건학술대회 우수발표상',
      '2014 중앙대학교병원 우수전공의 표창',
      '2013 두산 연강재단 이사장 표창',
    ],
  },
]

const TeamComponent: React.FC = () => {
  // const { moon, kim, woo} = mdData

  return (
    <main className="space-y-9 mb-20 relative">
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex mt-4">
          <SubSideMenu title="Team" menuList={teamMenuList} />
          <div className="w-full lg:ml-72 md:ml-0 sm:ml-0">
            <div id="md" className="scroll-m-[260px]">
              <PageTitle title="M.D" page="team" />
              {mdData.map((data) => (
                <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                  <div className="w-60 h-60 overflow-hidden ">
                    <img src={data.image} alt="team-image" />
                  </div>
                  <div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                        {data.name} <p className="text-gray-400">M.D Ph.d</p>
                      </h2>
                    </div>
                    <div className="mt-16 ml-4">
                      <h2 className="text-xl font-bold text-gray-500">학력</h2>
                      <ul className="mt-4 ml-4 space-y-2 text-gray-400 text-sm">
                        {data.edu.map((e, i) => (
                          <li key={i} className="font-semibold">
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-16 ml-4">
                      <h2 className="text-xl font-bold text-gray-500">경력 및 연수</h2>
                      <ul className="mt-4 ml-4 space-y-2 text-gray-400 text-sm">
                        {data.carrer.map((e, i) => (
                          <li key={i} className="font-semibold">
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-16 ml-4">
                      <h2 className="text-xl font-bold text-gray-500">수상 내역</h2>
                      <ul className="mt-4 ml-4 space-y-2 text-gray-400 text-sm">
                        {data.arward.map((e, i) => (
                          <li key={i} className="font-semibold">
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="co-worker" className="scroll-m-40">
              <PageTitle title="co-worker" page="team" />
              <div>
                {/* <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                  <div className="w-60 h-60 overflow-hidden">
                    <img src={kim} alt="team-image" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                      김지언<p className="text-gray-400">AI ∙ Software</p>
                    </h2>
                  </div>
                  <div className="mt-16 ml-4"></div>
                </div> */}
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
                <div className="mt-16 flex gap-20 lg:flex-row md:flex-col sm: flex-col">
                  <div className="w-60 h-60 overflow-hidden">
                    <img src={jang} alt="team-image" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-widest flex gap-4">
                      장영인<p className="text-gray-400">AI</p>
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
