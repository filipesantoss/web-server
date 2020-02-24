const Knex = require('knex');
const { development } = require('knexfile');
const { Model } = require('objection');

const internals = {};

internals.register = function(server) {
    const knex = Knex(development);
    Model.knex(knex);

    server.ext('onPostStop', knex.destroy);
};

module.exports = {
    name: 'database',
    register: internals.register
};
