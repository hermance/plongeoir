import type {
  TypeActionToggleLoad
} from "@src/types"

const initialState: any = {
  isLoading: false,
  deeplink: null
}

const reducer = (
  state: TypeApiState = initialState,
  action: TypeApiAction
): any => {
  if (action.type === "TOGGLE_LOAD") { //TODO pour un loader global , à implémenter côté ui
    return {
      ...state,
      isLoading: (action: TypeActionToggleLoad).isLoading
    }
  }
  //todo faire le reducer pour le login

  return initialState
}

export default reducer
