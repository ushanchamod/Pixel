import express from 'express';
import multer from 'multer';

const router = express.Router();

const imageStorage = multer.diskStorage({
  destination: function(req,file, cb){
      cb(null, 'images')
  },
  filename: function(req,file,cb){
      cb(null, new Date().toISOString().replace(/:/g, '-')+'_'+file.originalname);
  }
})

const images = multer({ storage: imageStorage}).array('images', 10);

router.get('/', )


export { router as UserRouter }