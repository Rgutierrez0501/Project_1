//sets up information to connect to Postgresql
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Project1',
    password: 'Calpoly1',
    port: 5432

});

module.exports = pool;