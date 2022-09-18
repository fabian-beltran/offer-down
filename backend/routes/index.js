const { Router } = require('express');
const { getUsers } = require('../controllers/index');
const router = Router();

const authRoutes = require('./auth');

router.get('/users', getUsers);

router.use('/auth', authRoutes);

module.exports = router;
