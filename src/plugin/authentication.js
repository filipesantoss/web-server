const JWT = require('hapi-auth-jwt2');
const { secret } = require('config');
const UserService = require('service/user');

const internals = {};

internals.validate = async function(decoded) {
    try {
        await UserService.get(decoded.id);
        return { isValid: true };
    } catch (error) {
        return { isValid: false };
    }
};

internals.register = async function(server) {
    await server.register(JWT);

    // private key
    const key = Buffer.from(secret, 'base64');
    const name = 'strategy';

    server.auth.strategy(name, 'jwt', {
        key,
        validate: internals.validate,
        verifyOptions: { algorithms: ['HS256'] }
    });

    server.auth.default(name);
};

module.exports = {
    name: 'authentication',
    register: internals.register
};
