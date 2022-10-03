const db = require('../db');

const getUsers = async (req, res) => {
    try {
        const results = await db.query('SELECT id, first_name, last_name, email FROM "user"');
        res.status(200).send(results.rows);
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = { getUsers };