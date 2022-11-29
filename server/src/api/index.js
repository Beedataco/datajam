const api = require('express').Router();
const obrasPub = require('../controller/obrasPub.controller');

/*
* caller function for global error handling
* route all calls through this to try and handle errors
*/

const use = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
api.get("/api", use(async (req, res) => {
  res.json({ message: "Hello from server!" });
}));
api.get("/api/v1/obrasPub", use(obrasPub.CreateObrasPub));
api.get("/api/v1/geojsonObrasPub", use(obrasPub.CreateGeojsonObrasPub));
api.get("/api/v1/updateObrasPub", use(obrasPub.UpdateObrasPub));

module.exports = api;