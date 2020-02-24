const UserController = require('controller/api/user');
const Validator = require('route/validator');

exports.list = {
    handler: UserController.list
};

exports.get = {
    handler: UserController.get,
    validate: { params: { id: Validator.number.required() } }
};

exports.create = {
    handler: UserController.create,
    validate: {
        payload: {
            username: Validator.string.required(),
            password: Validator.string.required()
        }
    }
};

exports.edit = {
    handler: UserController.edit,
    validate: {
        params: { id: Validator.number.required() },
        payload: {
            username: Validator.string,
            password: Validator.string
        }
    }
};

exports.delete = {
    handler: UserController.delete,
    validate: { params: { id: Validator.number.required() } }
};
