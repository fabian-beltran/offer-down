const { Router } = require('express');
const { register, login, logout, getMe } = require('../controllers/auth');
const { validation } = require('../middlewares/validation');
const { userAuth } = require('../middlewares/auth');

const router = Router();

const registerValidation = require('../validators/auth/register');
const loginValidation = require('../validators/auth/login');

router.post('/register', registerValidation, validation, register);
router.post('/login', loginValidation, validation, login);

router.post('/logout', logout);

router.get('/me', userAuth, getMe);




module.exports = router;