exports.seed = async function(knex) {
    await knex('contacts').del();
    await knex('users').del();
    await knex('users').insert([
        {
            id: 1,
            username: 'first',
            password:
                '$2b$05$BviHRX0ZKVfFat6D2mmYguzSFIXtc94p/DnNDi0qozzJnsPreJxti' // first
        },
        {
            id: 2,
            username: 'second',
            password:
                '$2b$05$YBi8KYuTq4E2WZlwTWlv9OBzBW7BrBGTf3XAYQ3KZwmwYmXTCKsV2' // second
        }
    ]);

    return knex('contacts').insert([
        {
            id: 1,
            user_id: 1,
            email: 'first.client@mail.com',
            phone: '111111111'
        },
        {
            id: 2,
            user_id: 2,
            email: 'second.client@mail.com',
            phone: '222222222'
        }
    ]);
};
