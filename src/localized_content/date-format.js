import { format } from "date-fns"
import en from "date-fns/locale/en-CA"
import fr from "date-fns/locale/fr-CA"

const dateFormatString = {
  en: "MMMM dd, yyyy",
  fr: "dd MMMM yyyy",
}

const locales = { en, fr }

export default (date, lang) => format(date, dateFormatString[lang], { locale: locales[lang] })
