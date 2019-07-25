var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, pic, callback) {
        callback(null, 'pics')
    },
    filename: function (req, pic, callback) {
        callback(null,pic.fieldname + "_" + Date.now() + "_" + pic.originalname )
        console.log('data reached in multer');
    }
});
var uploadImage = multer({ storage: storage });
module.exports = uploadImage; 