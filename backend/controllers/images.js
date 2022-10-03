const path = require('path');

const getImage = (req, res) => {
    const { filename } = req.params;
    res.sendFile(path.resolve(`./images/${filename}`));
};

const uploadImage = async (req, res) => {
    res.send({ message: 'Image uploaded.', image_url: req.image_url });
};

module.exports = { getImage, uploadImage };
