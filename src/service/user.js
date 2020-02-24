const UserDao = require('dao/user');
const User = require('model/user');
const { transaction } = require('objection');

exports.list = function() {
    return UserDao.list(User);
};

exports.get = async function(id) {
    const user = await UserDao.get(User, id);

    if (!user) {
        throw Error(`user ${id} not found`);
    }

    return user;
};

exports.create = function(model) {
    return transaction(User, function(txUser) {
        return UserDao.create(txUser, model);
    });
};

exports.edit = function(id, model) {
    return transaction(User, async function(txUser) {
        var user = await UserDao.get(txUser, id);

        if (!user) {
            throw Error(`user ${id} not found`);
        }

        return UserDao.edit(txUser, id, model);
    });
};

exports.delete = function(id) {
    return transaction(User, async function(txUser) {
        const user = await UserDao.get(txUser, id);

        if (!user) {
            throw { notFound: true, message: `user ${id} not found` };
        }

        if (user.contacts.length) {
            throw { message: 'associated contacts' };
        }

        return UserDao.delete(txUser, id);
    });
};
