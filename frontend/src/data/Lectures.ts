export interface LectureType  {
  code: number,
  date: string,
  title: string,
  korTitle: string
};

export interface LectureTypeStructure  {
  [year: number]: LectureType[];
};

export const Lectures:LectureTypeStructure[] = [
  { 2025: [
    {
      code: 17,
      date: '2025-02-15',
      title: '2nd Digital Conference for Private Practitioners, hosted by Incheon Medical Association, Incheon, Republic of Korea',
      korTitle: '인천광역시의사회 개원의를 위한 제2회 디지털 학술대회 강의'
    }
  ]},
  { 2024: [
    {
      code: 16,
      date: '2024-12-12',
      title: 'Editage Researcher Showcase 2024, Online',
      korTitle: 'Editage Researcher Showcase 강의'
    },
    {
      code: 15,
      date: '2024-11-22',
      title: '2024 Korean Society of Medical Informatics (KOSMI) Fall Conference, Seoul, Republic of Korea',
      korTitle: '2024년 대한의료정보학회 추계학술대회 강의'
    },
    {
      code: 14,
      date: '2024-11-17',
      title: '13th Clinical Cardiology Society Fall Conference, Seoul, Republic of Korea',
      korTitle: '제13회 임상순환기학회 추계학술대회 강의'
    },
    {
      code: 13,
      date: '2024-11-05',
      title: 'Biomedical Research Institute, Chung-Ang University Hospital, Seoul, Republic of Korea',
      korTitle: '2024년 중앙대학교병원 의생명연구원 강의'
    },
    {
      code: 12,
      date: '2024-10-25',
      title: '2024 Korean Academy of Tuberculosis and Respiratory Diseases (KATRD) Fall Conference, Seoul, Republic of Korea',
      korTitle: '2024년 대한 결핵 및 호흡기학회 추계 학술대회 강의'
    },
    {
      code: 11,
      date: '2024-10-13',
      title: '2024 Korean Society of Clinical Digital Medicine (KSCDM) Fall Conference, Seoul, Republic of Korea',
      korTitle: '2024년 임상디지털학회 추계 학술대회 강의'
    },
    {
      code: 10,
      date: '2024-10-12',
      title: '2024 Daejeon-Chungnam-Sejong Internal Medicine Society Fall Conference, Daejeon, Republic of Korea',
      korTitle: '2024년 대전충남세종내과의사회 추계학술대회 강의'
    },
    {
      code: 9,
      date: '2024-09-25',
      title: '2024 Chung-Ang University Hospital Respiratory and Allergy Symposium, Seoul, Republic of Korea',
      korTitle: '2024년 중앙대학교병원 호흡기알레르기내과 연수강좌 강의'
    },
    {
      code: 8,
      date: '2024-09-25',
      title: '2024 Chung-Ang University Hospital Respiratory and Allergy Symposium, Seoul, Republic of Korea',
      korTitle: '2024년 중앙대학교병원 호흡기알레르기내과 연수강좌 강의'
    },
    {
      code: 7,
      date: '2024-09-21',
      title: '2024 Chung-Ang University Hospital Respiratory and Allergy Symposium, Seoul, Republic of Korea',
      korTitle: '2024년 중앙대학교병원 호흡기알레르기내과 연수강좌 강의'
    },
    {
      code: 6,
      date: '2024-09-08',
      title: '2024 Chung-Ang University College of Medicine Internal Medicine Symposium, Seoul, Republic of Korea',
      korTitle: '2024년 중앙대학교 의과대학 내과학교실 연수강좌 강의'
    },
    {
      code: 5,
      date: '2024-06-02',
      title: '2024 Korean Society of Clinical Digital Medicine (KSCDM) Spring Conference, Seoul, Republic of Korea',
      korTitle: '2024년 임상디지털학회 춘계 학술대회 강의'
    },
    {
      code: 4,
      date: '2024-05-18',
      title: '2024 Daejeon Medical Association Spring Conference, Daejeon, Republic of Korea',
      korTitle: '2024년 대전광역시의사회 춘계 학술대회 강의'
    },
    {
      code: 3,
      date: '2024-04-01',
      title: 'Expert Column, Chung-Ang University Newspaper, Seoul, Republic of Korea',
      korTitle: '중앙대학교 신문 칼럼. 봄 미세먼지 칼럼'
    },
    {
      code: 2,
      date: '2024-02-01',
      title: 'Seoul National University Hospital, Division of Allergy and Clinical Immunology, Seoul, Republic of Korea',
      korTitle: '서울대학교병원 알레르기내과 강의'
    },
    {
      code: 1,
      date: '2024-01-14',
      title: '7th Chung-Ang University Hospital Pediatric Symposium, Seoul, Republic of Korea',
      korTitle: '제7회 중앙대학교병원 소아청소년과 연수강좌 강의'
    },
  ]},
]