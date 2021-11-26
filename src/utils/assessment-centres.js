const distanceBetweenTwoPoints = (lat1, lon1, lat2, lon2, unit) => {
  const radlat1 = (Math.PI * lat1) / 180
  const radlat2 = (Math.PI * lat2) / 180
  const theta = lon1 - lon2
  const radtheta = (Math.PI * theta) / 180
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  if (dist > 1) {
    dist = 1
  }
  dist = ((Math.acos(dist) * 180) / Math.PI) * 60 * 1.1515
  if (unit === "K") {
    dist *= 1.609344
  }
  if (unit === "N") {
    dist *= 0.8684
  }
  return dist
}

const sortAssessmentCentresByDistance = ({ latitude, longitude, locationList }) =>
  locationList
    .map(loc => {
      loc.dist = distanceBetweenTwoPoints(latitude, longitude, loc.latitude, loc.longitude, "K")
      return loc
    })
    .filter(loc => loc.dist)
    .sort((a, b) => (a.dist > b.dist ? 1 : -1))

const assessmentCentreServiceAvailable = serviceFlag => serviceFlag && serviceFlag.trim().toLowerCase() === "yes"

export { sortAssessmentCentresByDistance, assessmentCentreServiceAvailable }
