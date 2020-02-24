const WebController = require('controller/web');

exports.root = {
    handler: WebController.root,
    auth: false
};

exports.file = {
    handler: WebController.file,
    auth: false
};
