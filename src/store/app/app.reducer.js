import { TOGGLE_LOAD } from "./app.action-creator"

const initialState: any = {
  isLoading: false
}

const reducer = (state = initialState, action): any => {
  if (action.type === TOGGLE_LOAD) {
    return {
      ...state,
      isLoading: action.isLoading
    }
  }
  return state
}

export default reducer
