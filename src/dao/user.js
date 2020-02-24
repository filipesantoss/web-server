exports.list = function(entity) {
    return entity.query();
};

exports.get = function(entity, id) {
    return entity
        .query()
        .findById(id)
        .eager('contacts');
};

exports.create = function(entity, model) {
    return entity.query().insert(model);
};

exports.edit = function(entity, id, model) {
    return entity
        .query()
        .patch(model)
        .where({ id });
};

exports.delete = function(entity, id) {
    return entity.query().deleteById(id);
};
