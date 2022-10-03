const { check } = require('express-validator');

const title = check('title').notEmpty().withMessage('Title is required.');
const price = check('price').notEmpty().withMessage('Price is required.');
const condition = check('condition').notEmpty().withMessage('Condition is required.').isIn(['used', 'new', 'openbox']).withMessage('Invalid condition.');
const exchange_method = check('exchange_method').notEmpty().withMessage('Exchange method is required.').isIn(['delivery', 'pickup']).withMessage('Invalid exchange method.');
const image_url = check('image_url').notEmpty().withMessage('Image url is required.');

module.exports = [title, price, condition, exchange_method, image_url];