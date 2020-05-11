import React from "react"
import GlobalContextProvider from "./src/context/global-context-provider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
