const Inert = require('inert');

const internals = {};

internals.register = function(server) {
    server.register(Inert);
};

module.exports = {
    name: 'web',
    register: internals.register
};
