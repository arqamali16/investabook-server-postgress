const pg = require('pg')

const {Pool} = pg

const pool = new Pool({
    user: "arqamali",
    host: "localhost",
    database: 'investmentdb',
    port: 5432
});

module.exports = pool
