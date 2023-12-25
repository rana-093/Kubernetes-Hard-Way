const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = 3000;

// MySQL configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

console.log(`Host is: ${process.env.DB_HOST}`);

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Fetch employees from the database
app.get('/employees', (req, res) => {
    pool.query('SELECT * FROM employee', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
