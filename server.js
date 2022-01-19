/**
 * File: server.js
 * Description:  Incident reporting.
 * Data: 18/01/2022
 * Author: Kwabena Ampah
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Application running on port: ', port);
});