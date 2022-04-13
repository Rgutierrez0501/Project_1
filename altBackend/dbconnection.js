//sets up information to connect to Postgresql
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project_1',
    password: 'sql',
    port: 5432

});

module.exports = pool;