import i18next from "i18next"
import languageDetector from "react-native-locale-detector"
import dateFormat from "date-fns/format"

export type TypeI18n = {
  +lang: string,
  +t: (string, ?{ [string]: any }) => string
}

export type TypeI18NActionSetLang = {
  +type: "I18N_SET_LANG",
  +payload: string
}

type TypeI18NAction = TypeI18NActionSetLang

// To add a supported lang,
// 1- import translations
// 2- update whitelist / fallback

const supportedLang = ["fr", "en"]
const fallbackLang = "en"

const resources = {
  fr: {
    translation: {
      ...require("./locales/fr.json")
    }
  },
  en: {
    translation: {
      ...require("./locales/en.json")
    }
  }
}

i18next.init({
  //debug: true,
  whitelist: supportedLang,
  fallbackLng: fallbackLang,
  interpolation: {
    escapeValue: false,
    format: function(value, f, lng) {
      let format = f
      if (format) {
        const formatKey = "formats." + format
        const i18nforma = i18next.t(formatKey)
        if (i18nforma !== formatKey) {
          format = i18nforma
        }
      }
      // You can extends functionality here by providing custom format function based on value and format
      if (value instanceof Date) {
        const s = dateFormat(value, format, {
          locale: lng
        })
        return s
      }
      return value
    }
  },
  resources: resources
})

const i18n = (lng: string) => {
  let lang =
    supportedLang.find(l => l === lng) ||
    supportedLang.find(l => lng.indexOf(l) > -1) ||
    fallbackLang
  i18next.changeLanguage(lang)
  return {
    t: (...args: any) => i18next.t.apply(i18next, args),
    lang: lang
  }
}

const reducer = (state: TypeI18n, action: TypeI18NAction): TypeI18n => {
  if (!state) {
    return i18n(languageDetector)
  }

  if (action && action.type === "I18N_SET_LANG") {
    return i18n(action.payload)
  }

  return state
}

export default reducer
export { supportedLang, fallbackLang, resources, i18n }
