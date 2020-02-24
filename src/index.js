const Hapi = require('hapi');
const { server } = require('config');
const Plugin = require('plugin');

const internals = {};
internals.server = Hapi.server(server);

(async () => {
    await internals.server.register(Plugin);

    await internals.server.start();
    console.log(`server listening at port ${internals.server.settings.port}`);
})();
