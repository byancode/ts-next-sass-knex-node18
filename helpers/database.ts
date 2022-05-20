import knex from 'knex'

const connection = knex({
    client: 'mysql2',
});

export default connection;