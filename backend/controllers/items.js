const db = require('../db');

const getItems = async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM item');
        return res.status(200).send(results.rows.reverse());
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

const getItem = async (req, res) => {
    const { id } = req.params;
    try {
        const _res = await db.query('SELECT item.*, "user".first_name, "user".last_name FROM item JOIN "user" ON item.seller_id = "user".id WHERE item.id = $1', [id]);
        if (!_res.rows.length) return res.status(404).send({ message: 'Item not found.' })
        return res.status(200).send(_res.rows[0]);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
};

const createItem = async (req, res) => {
    const { title, price, description, condition, image_url, exchange_method } = req.body;
    const { id: seller_id } = req.user;
    try {
        const _res = await db.query('INSERT INTO item(title, price, description, condition, image_url, exchange_method, seller_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', [title, price, description, condition, image_url, exchange_method, seller_id]);
        res.status(201).send({ message: 'Item created.', item: _res.rows[0] })
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const _res = await db.query('SELECT * FROM item WHERE id = $1', [id]);
        if (_res.rows[0]?.seller_id != req.user.id) return res.status(403).send({ message: 'Forbidden' });

        const delete_res = await db.query('DELETE FROM item WHERE id = $1 RETURNING *', [id]);
        if (delete_res.rows.length > 0) return res.status(200).send({ message: 'Item deleted.' });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem,
}
