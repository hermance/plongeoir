import { config } from "./../utils/config"

const BOOK_ENDPOINT = "books"

class BookService {
  static getBooks = (): Promise<*> => {
    const url = config.url + BOOK_ENDPOINT
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resJson => {
        if (resJson && resJson.length > 0) {
          return resJson
        } else {
          return null
        }
      })
  }
}

export default BookService
