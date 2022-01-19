/**
 * File: src/controller/incident.controller.js
 * Description:  Databse configuration file: PostgreSQL.
 * Data: 18/01/2022
 * Author: Kwabena Ampah
 */

const Joi = require('joi');

const db = require("../config/database");
const axios = require("axios")

//Weather api key
const appid = "bbe6fdffb7963952b801f00b56c00ea0";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";




async function getWeatherData(req, res) {

    let client_id = req.body.client_id;
    let city = req.body.city;
    let incident_desc = req.body.incident_desc;
    let country = req.body.country;


    await axios.get(baseURL + '?q=' + city + '&appid=' + appid)
        .then(function(response) {
            // handle success


            // set weather api response body
            let weather_report = response.data;
            let date = new Date();

            try {


                let insert_query = db.query(
                    "INSERT INTO incidents (client_id, incident_desc, city, country, date, weather_report) VALUES ($1, $2, $3, $4, $5, $6)", [
                        client_id,
                        incident_desc,
                        city,
                        country,
                        date,
                        weather_report
                    ]
                );

                return res.send({
                    message: "Incident has been submitted successfully"
                });

                return "Hello";


            } catch (error) {

                return res.send({
                    message: error.message
                })
            }


            // console.log(response);
        })
        .catch(function(error) {
            // handle error

            return res.status(500).json({ message: "Weather API : " + error.message });
            console.log(error.message);

        })



}


exports.createIncident = async(req, res, next) => {

    let client_id = req.body.client_id;
    let city = req.body.city;
    let country = req.body.country;

    try {
        const db_response = await db.query('SELECT * FROM incidents WHERE client_id = $1', [client_id]);

        if (db_response.rows.length > 0) {
            return res.status(200).send({
                message: "Incident with client Id |# " + client_id + "| already exsit",
            });
        }

        return getWeatherData(req, res);

    } catch (error) {
        return res.status(400).send({
            message: error.message,
        });
    }

};

exports.getIncidents = async(req, res, next) => {
    const response = await db.query('SELECT * FROM incidents ORDER BY id DESC');
    res.status(200).send(response.rows);
}