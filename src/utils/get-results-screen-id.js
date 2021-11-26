import { general } from "../localized_content"

const getResultsScreenId = lang => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  const basePathLength = general[lang].basePath.length
  return url.substring(basePathLength, basePathLength + 2)
}

export default getResultsScreenId
