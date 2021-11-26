const postalCodes = require("./src/dev_data/on-postal-codes.json")
const locations = require("./src/dev_data/assessment-centre-locations.json")

/*
 * In development mode, we add these two endpoints to our express server to emulate
 * the production APIs. The JSON they return is formatted identical to production.
 */
exports.onCreateDevServer = ({ app }) => {
  app
    .get("/covid-19-ac-assets/data/postal_codes.json", function(req, res) {
      res.json(postalCodes)
    })
    .get("/covid-19-ac-assets/data/locations.json", function(req, res) {
      res.json(locations)
    })
}
