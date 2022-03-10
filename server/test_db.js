const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config()

const pool = new Pool({
  user: process.env.PG_USERNAME,
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || '5432'),
  database: process.env.PG_TEST_DATABASE,
});

module.exports = pool;