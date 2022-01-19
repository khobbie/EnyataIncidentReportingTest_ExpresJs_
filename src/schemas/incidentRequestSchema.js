let yup = require("yup")

let incidentReportRequestSchema = yup.object().shape({
    client_id: yup.number().required().positive(),
    incident_desc: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
});

module.exports = {
    incidentReportRequestSchema: incidentReportRequestSchema
}