/* eslint-disable @typescript-eslint/no-explicit-any */
import { LectureItem, NewsItem, PublicationsItem, YoutubeItem } from '../interface/request'
// const apiUrl = `${process.env.REACT_APP_API}/api/v1`
const apiUrl = `http://165.194.29.153/api/v1`

class BlogAPI {
  async fetchNewsList(): Promise<NewsItem[]> {
    const response = await fetch(`${apiUrl}/blog/news`)
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || 'News 목록을 불러오는 데 실패했습니다.')
    }

    return result.data
  }
  async fetchYoutubeList(): Promise<YoutubeItem[]> {
    const response = await fetch(`${apiUrl}/blog/youtube`)
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || 'Youtube 목록을 불러오는 데 실패했습니다.')
    }

    return result.data
  }
  async fetchPulicationsList(): Promise<PublicationsItem[]> {
    const response = await fetch(`${apiUrl}/blog/publications`)
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || 'publications 목록을 불러오는 데 실패했습니다.')
    }

    return result.data
  }
  async fetchLectureList(): Promise<LectureItem[]> {
    const response = await fetch(`${apiUrl}/blog/lecture`)
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || 'publications 목록을 불러오는 데 실패했습니다.')
    }

    return result.data
  }
  async postData(body, url): Promise<any> {
    const response = await fetch(`${apiUrl}/blog/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${url}를 등록하는데 실패했습니다.`)
    }

    return result.data
  }
  async postFileData(body, url): Promise<any> {
    const response = await fetch(`${apiUrl}/blog/${url}`, {
      method: 'POST',
      body: body,
    })
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${url}를 등록하는데 실패했습니다.`)
    }

    return result.data
  }
  async putData(body, url): Promise<any> {
    const response = await fetch(`${apiUrl}/blog/${url}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${url}를 수정하는데 실패했습니다.`)
    }

    return result.data
  }
  async putFileData(body, url): Promise<any> {
    const response = await fetch(`${apiUrl}/blog/${url}`, {
      method: 'PUT',
      body: body,
    })
    const result = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${url}를 수정하는데 실패했습니다.`)
    }

    return result.data
  }
}
export default new BlogAPI()