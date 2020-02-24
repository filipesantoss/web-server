const AuthenticationService = require('service/authentication');
const Boom = require('boom');

exports.login = async function(request, h) {
    try {
        const token = await AuthenticationService.authenticate(
            request.payload.id,
            request.payload.password
        );

        return h.response().header('Server-Authorization', token);
    } catch (error) {
        return Boom.unauthorized(error.message);
    }
};
