const AuthenticationController = require('controller/api/authentication');
const validator = require('route/validator');

exports.login = {
    handler: AuthenticationController.login,
    validate: {
        payload: {
            id: validator.number.required(),
            password: validator.string.required()
        }
    },
    auth: false
};
