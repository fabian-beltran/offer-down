const db = require('../db');

const getItems = async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM items');
        return res.status(200).send(results.rows);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

const createItem = async (req, res) => {
    const { title, price, description, image_url, exchange_method } = req.body;
    const { id: seller_id } = req.user;
    try {
        await db.query('INSERT INTO items(title, price, description, image_url, exchange_method, seller_id) VALUES($1, $2, $3, $4, $5, $6)', [title, price, description, image_url, exchange_method, seller_id]);
        res.status(201).send({ message: 'Item created.' })
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const _res = await db.query('SELECT * FROM items WHERE id = $1', [id]);
        if (_res.rows[0]?.seller_id != req.user.id) return res.status(403).send({ message: 'Forbidden' });

        const delete_res = await db.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);
        if (delete_res.rows.length > 0) return res.status(200).send({ message: 'Item deleted.' });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
    }
}

module.exports = {
    getItems,
    createItem,
    deleteItem
}