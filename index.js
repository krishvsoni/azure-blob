const { BlobServiceClient } = require('@azure/storage-blob');

const AZURE_STORAGE_CONNECTION_STRING = '';
const CONTAINER_NAME = '';

const BLOB_NAME = '';

async function uploadImageToAzureBlobStorage(imageBuffer) {
  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

  const createContainerResponse = await containerClient.createIfNotExists();
  if (createContainerResponse.succeeded) {
    console.log(`Created container "${CONTAINER_NAME}" successfully.`);
  } else {
    console.log(`Container "${CONTAINER_NAME}" already exists.`);
  }

  const blockBlobClient = containerClient.getBlockBlobClient(BLOB_NAME);
  const uploadBlobResponse = await blockBlobClient.upload(imageBuffer, imageBuffer.length);
  console.log(`Uploaded blob "${BLOB_NAME}" with length ${imageBuffer.length}.`);
}
const fs = require('fs');

const filePath = 'images/spiderman.jpg';
if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
  console.error(`File "${filePath}" does not exist or is not a file.`);
  process.exit(1);
}

const imageBuffer = fs.readFileSync(filePath);

uploadImageToAzureBlobStorage(imageBuffer);