const Joi = require('joi');

exports.number = Joi.number()
    .integer()
    .positive();

exports.string = Joi.string();
