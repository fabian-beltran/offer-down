const multer = require('multer');
const path = require('path');
const { SERVER_URL } = require('../constants');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },

    filename: (req, file, cb) => {
        const filename = Date.now() + path.extname(file.originalname);
        req.image_url = `${SERVER_URL}/api/images/lib/${filename}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

module.exports = upload;