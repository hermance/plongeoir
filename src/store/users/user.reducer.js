import { LOGIN, LOGOUT } from "./user.action-creator"

const initialState: any = {}

const reducer = (state = initialState, action): any => {
  if (action.type === LOGIN) {
    return {
      ...state,
      user: action.user
    }
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      user: undefined
    }
  }
  return initialState
}

export default reducer
