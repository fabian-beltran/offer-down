const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'default',
    host: 'localhost',
    port: 5432,
    database: 'offerdown',
});

module.exports = pool;