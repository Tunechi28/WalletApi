const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.AWSSecretKey,
  accessKeyId: process.env.AWSAccessKeyId,
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'my-amazon-v1',
    acl: 'public-read',
    metadata: (req: any, file: { fieldname: any; }, cb: (arg0: null, arg1: { fieldName: any; }) => void) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
      cb(null, Date.now().toString());
    },
  }),
});

export{
  upload
} 
