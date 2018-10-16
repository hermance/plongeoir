import { GET_BOOKS } from "./book.action-creator"

const initialState: any = {
  books: []
}

const reducer = (state = initialState, action): any => {
  if (action.type === GET_BOOKS) {
    return {
      ...state,
      books: action.books
    }
  }
  return state
}

export default reducer
