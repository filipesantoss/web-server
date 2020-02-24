const UserService = require('service/user');
const Boom = require('boom');

exports.list = async function() {
    return await UserService.list();
};

exports.get = async function(request) {
    const id = Number.parseInt(request.params.id, 10);

    try {
        return await UserService.get(id);
    } catch (error) {
        return Boom.notFound(error.message);
    }
};

exports.create = async function(request, h) {
    const user = await UserService.create(request.payload);
    return h.response().created(`/api/user/${user.id}`);
};

exports.edit = async function(request) {
    const [id, user] = [
        Number.parseInt(request.params.id, 10),
        request.payload
    ];

    try {
        return await UserService.edit(id, user);
    } catch (error) {
        return Boom.notFound(error.message);
    }
};

exports.delete = async function(request, h) {
    const id = Number.parseInt(request.params.id);

    try {
        await UserService.delete(id);
        return h.response().code(204);
    } catch (error) {
        const response = error.notFound ? Boom.notFound : Boom.badRequest;
        return response(error.message);
    }
};
