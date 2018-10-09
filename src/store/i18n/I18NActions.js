import type { TypeI18NActionSetLang } from "./I18NReducer"

const actions = {
  setLang: (lng: string): TypeI18NActionSetLang => ({
    type: "I18N_SET_LANG",
    payload: lng
  })
}

export default actions
