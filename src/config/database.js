/**
 * File: src/config/database.js
 * Description:  Databse configuration file: PostgreSQL.
 * Data: 18/01/2022
 * Author: Kwabena Ampah
 */


const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Connection Added to pool:
const pool = new Pool({
    user: process.env.db_username,
    host: process.env.host,
    database: process.env.enyata_db,
    password: process.env.db_password,
    port: process.env.port_,

    // connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Connection to database successful !');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};