const multer = require('multer')
const MulterAzureStorage = require('multer-azure-blob-storage').MulterAzureStorage;

const resolveBlobName = (req, file) => { 
  return new Promise((resolve, reject) => {
    const blobName = file.originalname;
    resolve(blobName);
  });
};

const azureStorage = new MulterAzureStorage({
  connectionString: process.env.BLOB_CONNECTION_STRING,
  blobName: resolveBlobName,
  containerName: 'multerbucket',
  containerAccessLevel: 'container',
  urlExpirationTime: -1
});

const upload = multer({
  storage: azureStorage
});

module.exports = upload