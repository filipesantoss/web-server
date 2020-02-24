const User = require('route/api/user');
const Authentication = require('route/api/authentication');
const Web = require('route/web');

module.exports = [
    { method: 'GET', path: '/api/user', config: User.list },
    { method: 'GET', path: '/api/user/{id}', config: User.get },
    { method: 'POST', path: '/api/user', config: User.create },
    { method: 'PUT', path: '/api/user/{id}', config: User.edit },
    { method: 'DELETE', path: '/api/user/{id}', config: User.delete },
    { method: 'POST', path: '/api/login', config: Authentication.login },
    { method: 'GET', path: '/', config: Web.root },
    { method: 'GET', path: '/{file}', config: Web.file }
];
