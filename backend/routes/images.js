const { Router } = require('express');
const { getImage, uploadImage } = require('../controllers/images');
const { userAuth } = require('../middlewares/auth');
const router = Router();

const upload = require('../middlewares/upload');

router.use('/lib/:filename', getImage);
router.post('/upload', userAuth, upload.single('image'), uploadImage); // CHANGE ROUTE!!!

module.exports = router;