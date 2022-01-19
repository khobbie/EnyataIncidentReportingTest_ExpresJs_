/**
 * File: src/routes/incident.routes.js
 * Description:  Databse configuration file: PostgreSQL.
 * Data: 18/01/2022
 * Author: Kwabena Ampah
 */


const router = require('express-promise-router')();

const schema = require('../schemas/incidentRequestSchema');
const { validateRequest } = require('../middleware/helper');
const incidentController = require('../controllers/incident.controller');


// ==> Report incident route  (POST): localhost:3000/api/report-incident
router.post('/report-incident', validateRequest(schema.incidentReportRequestSchema), incidentController.createIncident);

router.get('/incidents', incidentController.getIncidents);


module.exports = router;