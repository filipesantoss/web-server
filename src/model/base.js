const { Model } = require('objection');

class Base extends Model {}

Base.modelPaths = [__dirname];

module.exports = Base;
