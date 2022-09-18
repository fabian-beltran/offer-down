const { Router } = require('express');
const { register, login, logout } = require('../controllers/auth');
const { validation } = require('../middlewares/validation');
const { userAuth } = require('../middlewares/auth');

const router = Router();

const registerValidation = require('../validators/auth/register');
const loginValidation = require('../validators/auth/login');

router.post('/register', registerValidation, validation, register);
router.post('/login', loginValidation, validation, login);

router.post('/logout', userAuth, logout);



module.exports = router;