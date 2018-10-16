import type { Dispatch } from "redux"
import BookService from "../../service/book.service"
export const GET_BOOKS = "GET_BOOKS"
import type BookType from "../types"
import appActions from "../app/app.action-creator"

function getBooks(books: BookType) {
  return {
    type: GET_BOOKS,
    books
  }
}

const bookActions = {
  getBooks: () => (dispatch: Dispatch<any>): void => {
    //dispatch(appActions.toggleLoad(true))
    return BookService.getBooks()
      .then(books => {
        //dispatch(appActions.toggleLoad(false))
        if (books) {
          return dispatch(getBooks(books))
        }
        return Promise.resolve()
      })
      .catch(err => Promise.reject(err))
  }
}

export default bookActions
