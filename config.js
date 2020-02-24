const Crypto = require('crypto');

// CREATE DATABASE web_server;
// CREATE USER 'mysql'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
// GRANT ALL PRIVILEGES ON web_server.* TO 'mysql'@'localhost';
exports.connection = {
    host: 'localhost',
    database: 'web_server',
    user: 'mysql',
    password: ''
};

exports.server = {
    host: 'localhost',
    port: 8080,
    routes: {
        cors: {
            origin: ['*'],
            maxAge: 3600
        },
        files: {
            relativeTo: `${__dirname}/www`
        }
    }
};

exports.secret = Crypto.randomBytes(256).toString('base64');
