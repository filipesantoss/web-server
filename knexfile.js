const { connection } = require('config');
const { knexSnakeCaseMappers } = require('objection');

module.exports = {
    development: {
        client: 'mysql',
        version: '8.0',
        connection,
        migrations: { directory: './db/migrations' },
        seeds: { directory: './db/seeds' },
        pool: { min: 1, max: 10 },
        acquireConnectionTimeout: 7200,
        ...knexSnakeCaseMappers()
    }
};
