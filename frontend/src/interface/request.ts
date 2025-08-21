// NewsItem
export interface NewsItem {
  id: number
  news_title: string
  news_link: string
  created_at: string
}
export interface LectureItem {
  id: number
  lecture_title: string
  lecture_description: string
  lecture_date: string
  created_at: string
}

export interface YoutubeItem {
  id: number
  youtube_title: string
  youtubue_link: string
  created_at: string
}

export interface PublicationsItem {
  id: number
  publication_title: string
  author: string
  publication_image: string
  doi: string
  created_at: string
}

export interface UserItem {
  id: number
  name: string
  hashed_password: string
  email: string
  create_at: string
  institution_id: string
  research_grade_id: string
  app_grade_id: string
}

export interface InstitutionItem {
  id: number
  institution: string
}

export interface GradeItem {
  id: number,
  grade_name: string
}

export interface GalleryListItem {
  id: number
  title: string
  description: string
  original_name: string
  file_url: string
  mime_type: string
  size: number,
  is_public: boolean,
  created_at: string
  updated_at: string
}

export interface NoticeItem {
  id: number
  created_at: string
  notice_contents: string
  notice_publication: boolean
  notice_title: string
}