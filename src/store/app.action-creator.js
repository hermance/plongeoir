export const TOGGLE_LOAD = "TOGGLE_LOAD"
function toggleLoad(isLoading: boolean) {
  return {
    type: TOGGLE_LOAD,
    isLoading
  }
}

const app = {
  toggleLoad: (isLoading: boolean) => (dispatch: Dispatch<any>): void => {
    //TODO pour un loader global , à implémenter côté ui
    dispatch(toggleLoad(isLoading))
  }
  //todo faire l'action pour le login
}

export default app
