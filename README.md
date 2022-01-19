


# Incident reporting API with Express Js


### Install Project
    $ git clone https://github.com/khobbie/EnyataIncidentReportingTest_ExpresJs_.git
    $ cd EnyataIncidentReportingTest_ExpresJs_
    $ npm install
    $ nodemon

###
    $ Rename 'env.example' to .env

Incident reporting.
As part of this test, you are tasked to create endpoints to submit and list incident reports for insurance clients.

The required working flow:
A POST endpoint that receives the incident report.
The report should have the following data :
{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string }
The endpoint receives the report, adds weather data and stores it in a table “incidents”.
The weather report should be fetched from the API service of https://openweathermap.org/current
The stored object should be then as follow :
{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string, “date”: date, “weather_report”: object }
A GET endpoint that lists all the incidents.
The required stack :
NodeJS and express.
PostgreSQL.
How to submit?
Setup the local environment conforming to the requirements.
Code, run and test in your local environment.
Once confident the result is as per the test requirement, push to a GitHub repository and reply to this email with a link to the repo.
Bonus points if you also send a live url for the api
How your work will be evaluated?
Special attention will be given to the code quality, error handling, and modules choice.
Good luck ;) 
openweathermap.orgopenweathermap.org
Current weather data - OpenWeatherMap
Access current weather data for any location on Earth. We collect and process weather data from different sources such as global and local weather models, satellites, radars and vast network of weather stations. Data is available in JSON, XML, or HTML format

Thank you