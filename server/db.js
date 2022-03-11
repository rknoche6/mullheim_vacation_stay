const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
  user: process.env.PG_USERNAME,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || '5432'),
  database: process.env.PG_DATABASE,
});

module.exports = pool;