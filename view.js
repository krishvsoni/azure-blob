const { BlobServiceClient } = require('@azure/storage-blob');

const AZURE_STORAGE_CONNECTION_STRING = '';
const CONTAINER_NAME = '';

const BLOB_NAME = '';

const SAS_TOKEN = '';

async function generateBlobUrl() {
  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);
  const blobUrl = containerClient.getBlockBlobClient(BLOB_NAME).url + '?' + SAS_TOKEN;

  console.log(`Blob URL: ${blobUrl}`);
}

generateBlobUrl();