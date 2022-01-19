const express = require('express');
const cors = require('cors');


// SWAGGER SETUP
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// const swaggerDocument = require('./swagger.json');


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Incident Reporting API",
            version: 1,
            description: "A simple api for incident report api"
        },
        servers: [{
            url: "http://localhost:3000"
        }],
    },
    apis: ["./routes/*.js"],
    explorer: true

};

const specs = swaggerJsDoc(options);



// END SWAGGER SETUP


const app = express();

const bodyParser = require('body-parser')

// ==> Importing Routes API:
const index = require('./routes/index');
const incidentRoute = require('./routes/incident.routes');

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(index);
app.use('/api/', incidentRoute);

module.exports = app;