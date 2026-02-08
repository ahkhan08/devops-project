const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'devopsdb',
  password: 'Khan@5179',
  port: 5432,
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
