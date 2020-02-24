const Base = require('model/base');

class User extends Base {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'password'],
            properties: {
                id: { type: 'integer' },
                username: { type: 'string' },
                password: { type: 'string' }
            }
        };
    }

    static get relationMappings() {
        return {
            contacts: {
                relation: Base.HasManyRelation,
                modelClass: 'contact',
                join: {
                    from: 'contacts.userId',
                    to: 'users.id'
                }
            }
        };
    }

    $formatJson(json) {
        const result = super.$formatJson(json);
        delete result.password;
        return result;
    }
}

module.exports = User;
