/* eslint-disable @typescript-eslint/no-explicit-any */
const apiUrl = `${import.meta.env.VITE_APP_URL}/api/v1`
// const apiUrl = `http://localhost:9000/api/v1`

interface APIResponse<T> {
  code: number
  message: string
  data: T
}

class BlogAPI {
  public getData = async <T>(url: string, type?: string): Promise<T> => {
    const response = await fetch(apiUrl + url)
    const result: APIResponse<T> = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${type} 목록을 불러오는 데 실패했습니다.`)
    }
    return result.data
  }

  /**
   * postData
   * url: 호출할 url
   * body: formData
   * type: 호출한 위치
   */
  public postData = async <T>(url: string, body: any, type?: string) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result: APIResponse<T> = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${type}를 등록하는데 실패했습니다.`)
    }
    return result.data
  }

  /**
   * putData
   * url: 호출할 url
   * body: formData
   * type: 호출한 위치
   */
  public putData = async <T>(url: string, body: any, type?: string) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result: APIResponse<T> = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${type}를 수정하는데 실패했습니다.`)
    }
    return result.data
  }

  /**
   * patchData
   * url: 호출할 url
   * body: formData
   * type: 호출한 위치
   */
  public patchData = async <T>(url: string, body: any, type?: string) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result: APIResponse<T> = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${type}를 수정하는데 실패했습니다.`)
    }
    return result.data
  }

  /**
   * deleteData
   * url: 호출할 url
   * body: formData
   * type: 호출한 위치
   */
  public deleteData = async <T>(url: string, body: any, type?: string) => {
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result: APIResponse<T> = await response.json()
    if (result.code !== 200) {
      throw new Error(result.message || `${type}를 삭제하는데 실패했습니다.`)
    }
    return result
  }

  async postFileData(url, body): Promise<any> {
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
