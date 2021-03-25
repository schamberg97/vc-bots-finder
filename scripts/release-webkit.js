const { ZipAFolder } = require('zip-a-folder');

const archivePath = `${__dirname}/../build/chrome-${new Date().toISOString()}.zip`;

async function release() {
  console.log('Archiving started...');
  try {
    await ZipAFolder.zip(`${__dirname}/../dist`, archivePath);
    console.log('Archiving finished.');
  } catch (error) {
    console.log('Error happened: ' + error);
  }
}

release();
