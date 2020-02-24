const Bcrypt = require('bcrypt');

(async function() {
    const password = process.argv[2];

    if (!password) {
        console.log('usage: <password>');
        return;
    }

    const hash = await Bcrypt.hash(password, 5);
    console.log(hash);
})();
