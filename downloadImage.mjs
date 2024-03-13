import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

const BLOB_URL ='';
async function downloadImage() {
  const response = await fetch(BLOB_URL);

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }

  const imageBuffer = await response.arrayBuffer();

  writeFileSync('image.jpg', Buffer.from(imageBuffer));

  console.log('Image downloaded successfully.');
}

downloadImage();
