const { compare } = require('bcryptjs');
const { check } = require('express-validator');
const db = require('../../db');

const login = check('email').custom(async (value, { req }) => {
    const userSearch = await db.query('SELECT * FROM "user" WHERE email = $1', [value]);

    if (!userSearch.rows.length) throw new Error('User does not exist.');

    const user = userSearch.rows[0];
    const validPassword = await compare(req.body.password, user.password);

    if (!validPassword) throw new Error('Password is incorrect.');

    req.user = { ...user, password: undefined };
});

module.exports = [login];