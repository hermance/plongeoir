import type { Dispatch } from "redux"
import UserService from "../service/user.service"
export const TOGGLE_LOAD = "TOGGLE_LOAD"
export const LOGIN = "LOGIN"

function toggleLoad(isLoading: boolean) {
  return {
    type: TOGGLE_LOAD,
    isLoading
  }
}
function login(user) {
  return {
    type: LOGIN,
    user
  }
}

const appActions = {
  login: (email: string, password: string) => (
    dispatch: Dispatch<any>
  ): void => {
    return UserService.login(email, password)
      .then(user => {
        if (user) {
          return dispatch(login(user))
        }
        return Promise.resolve()
      })
      .catch(err => Promise.reject(err))
  },
  toggleLoad: (isLoading: boolean) => (dispatch: Dispatch<any>): void => {
    //TODO pour un loader global , à implémenter côté ui
    dispatch(toggleLoad(isLoading))
  }
}

export default appActions
