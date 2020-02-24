exports.up = async function(knex) {
    await knex.schema.createTable('users', function(table) {
        table.increments().primary();
        table.string('username');
        table.string('password');
    });

    return knex.schema.createTable('contacts', function(table) {
        table.increments().primary();
        table.string('email');
        table.string('phone');
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('contacts');
    return knex.schema.dropTableIfExists('users');
};
