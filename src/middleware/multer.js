const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    const timeStamp = new Date().getTime();
    const originalname = file.originalname;
    // const extension = path.extname(file.originalname);

    cb(null, `${timeStamp}-${originalname}`);
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1000 * 1000 //3 MB
  }
});

module.exports = upload;