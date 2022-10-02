const { Router } = require('express');
const { getUsers } = require('../controllers/index');
const router = Router();

const authRoutes = require('./auth');
const itemsRoutes = require('./items');

router.get('/users', getUsers);

router.use('/auth', authRoutes);
router.use('/items', itemsRoutes);


module.exports = router;
