import { GET_BOOKS } from "./book.action-creator"

const initialState: any = {}

const reducer = (state = initialState, action): any => {
  if (action.type === GET_BOOKS) {
    return {
      ...state,
      books: action.books
    }
  }
  return initialState
}

export default reducer
