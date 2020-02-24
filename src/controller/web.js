exports.root = function(request, h) {
    return h.file('index.html');
};

exports.file = function(request, h) {
    return h.file(request.params.file);
};
