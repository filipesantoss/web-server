const UserService = require('service/user');
const JsonWebToken = require('jsonwebtoken');
const Bcrypt = require('bcrypt');
const { secret } = require('config');

const internals = {};

internals.getToken = function(id) {
    const key = Buffer.from(secret, 'base64');
    return JsonWebToken.sign({ id }, key, { expiresIn: '1h' });
};

exports.authenticate = async function(id, password) {
    const user = await UserService.get(id);

    if (!user || !Bcrypt.compare(user.password, password)) {
        throw Error('invalid credentials');
    }

    return internals.getToken(id);
};
