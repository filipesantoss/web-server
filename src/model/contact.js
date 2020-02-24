const Base = require('model/base');

class Contact extends Base {
    static get tableName() {
        return 'contacts';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'phone', 'userId'],
            properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                phone: { type: 'string' },
                userId: { type: 'integer' }
            }
        };
    }

    $formatJson(json) {
        const result = super.$formatJson(json);
        delete result.userId;
        return result;
    }
}

module.exports = Contact;
