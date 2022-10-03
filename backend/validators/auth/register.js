const { check } = require('express-validator');
const db = require('../../db');

const firstName = check('first_name').notEmpty().withMessage('First name is required.');
const lastName = check('last_name').notEmpty().withMessage('Last name is required.');;
const email = check('email').isEmail().withMessage('Email is invalid.')
const password = check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.');

const emailExists = check('email').custom(async value => {
    const res = await db.query('SELECT * FROM "user" WHERE email = $1', [value])

    if (res.rows.length > 0) {
        throw new Error('Email is already in use.');
    }
})

module.exports = [firstName, lastName, email, password, emailExists];