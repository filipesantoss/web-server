const Endpoint = require('route');

const internals = {};

internals.register = function(server) {
    server.route(Endpoint);
};

module.exports = {
    name: 'api',
    register: internals.register
};
