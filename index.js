require('dotenv').config();

const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});



app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Database connected at: ${result.rows[0].now}`);
  } catch (err) {
    res.send('Database not connected');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
