const db = require('../db');
const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { SECRET } = require('../constants');

const register = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const hashedPassword = await hash(password, 10);

        await db.query('INSERT INTO "user"(first_name, last_name, email, password) VALUES($1, $2, $3, $4)', [first_name, last_name, email, hashedPassword]);

        return res.status(201).send({
            message: 'User created.'
        });

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

const login = async (req, res) => {
    const { id, email } = req.user;
    try {
        const token = await sign({ id, email }, SECRET);
        return res.status(200).cookie('token', token, { httpOnly: true }).send({ message: 'Logged in successfully.', user: req.user });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

const logout = async (req, res) => {
    try {
        return res.status(200).clearCookie('token', { httpOnly: true }).send({ message: 'Logged out successfully.' });
    } catch (err) {
       console.log(err.message);
       return res.status(500).send({ error: err.message }); 
    }
}

const getMe = async (req, res) => {
    try {
        return res.status(200).send({ user: req.user });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message }); 
    }
}

module.exports = {
    register,
    login,
    logout,
    getMe
};