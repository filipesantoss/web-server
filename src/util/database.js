const Knex = require('knex');
const { development } = require('knexfile');

(async function() {
    const knex = Knex(development);

    try {
        await knex.migrate.latest();
        await knex.seed.run();
    } catch (error) {
        console.log(error);
    } finally {
        await knex.destroy();
    }
})();
