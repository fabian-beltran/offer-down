const { Router } = require('express');
const { register, login } = require('../controllers/auth');
const { validation } = require('../middlewares/validation');
const router = Router();

const registerValidation = require('../validators/auth/register');
const loginValidation = require('../validators/auth/login');

router.post('/register', registerValidation, validation, register);
router.post('/login', loginValidation, validation, login);


module.exports = router;