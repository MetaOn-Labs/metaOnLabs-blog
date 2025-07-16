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
