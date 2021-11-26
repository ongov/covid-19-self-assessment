import React from "react"
import { format } from 'date-fns'
import { frCA, enCA } from 'date-fns/locale'

const DateEN = format(new Date(), "' 'MMMM' 'do', 'yyyy'", {locale: enCA})
const TimeEN = format(new Date(), "' 'h':'mm' 'aaaa' ", {locale: enCA})
const DateFR = format(new Date(), "' 'PPP'", {locale: frCA})
const TimeFR = format(new Date(), "' 'H' h 'm' ", {locale: frCA})

const resultsDate = {
  en: {
    date: (
      <>
        { DateEN }{' '}at{' '}{ TimeEN }
      </>
    )
  },

  fr: {
    date: (
      <>
        { DateFR }{' '}à{' '}{ TimeFR }
      </>
    )
  },
}

export default resultsDate
