const { Router } = require('express');
const { getItems, getItem, createItem, deleteItem } = require('../controllers/items');
const { validation } = require('../middlewares/validation');
const { userAuth } = require('../middlewares/auth');
const router = Router();

const createValidation = require('../validators/items/create');

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', userAuth, createValidation, validation, createItem);
router.delete('/:id', userAuth, deleteItem);


module.exports = router;
