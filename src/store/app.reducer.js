import { LOGIN, TOGGLE_LOAD } from "./app.action-creator"

const initialState: any = {
  isLoading: false
}

const reducer = (
  state: TypeApiState = initialState,
  action: TypeApiAction
): any => {
  if (action.type === TOGGLE_LOAD) {
    //TODO pour un loader global , à implémenter côté ui
    return {
      ...state,
      isLoading: action.isLoading
    }
  }
  if (action.type === LOGIN) {
    return {
      ...state,
      user: action.user
    }
  }
  return initialState
}

export default reducer
