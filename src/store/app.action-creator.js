import type { Dispatch } from "redux"
export const TOGGLE_LOAD = "TOGGLE_LOAD"

function toggleLoad(isLoading: boolean) {
  return {
    type: TOGGLE_LOAD,
    isLoading
  }
}

const appActions = {
  toggleLoad: (isLoading: boolean) => (dispatch: Dispatch<any>): void => {
    dispatch(toggleLoad(isLoading))
  }
}

export default appActions
