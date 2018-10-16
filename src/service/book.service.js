import { config } from "./../utils/config"

const BOOK_ENDPOINT = "books"

class BookService {
  static getBooks = (): Promise<*> => {
    const url = config.url + BOOK_ENDPOINT
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
    })
  }
}

export default BookService
