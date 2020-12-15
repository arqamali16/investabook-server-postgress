const pg = require('pg')

const {Pool} = pg

const pool = new Pool({
    user: "kmsvpqnghijxaf",
    host: "ec2-35-169-184-61.compute-1.amazonaws.com",
    database: 'd2te5s9tkt5nm9',
    port: 5432,
    password:'bec95e5246bf7cff092fb2d623f6aadddccce2c22539cb13bfbe19ea24b8e529'
});

module.exports = pool
