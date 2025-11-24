import fs from 'fs';
import http from 'http';
import path from 'path';

const API_URL = process.env.API_URL || 'http://localhost:3009/api/discovery/submissions/export';
const OUTPUT_DIR = process.cwd();

console.log('📥 Downloading submissions from:', API_URL);

http.get(API_URL, (res) => {
    if (res.statusCode !== 200) {
        console.error(`❌ Failed to download: Status Code ${res.statusCode}`);
        res.resume();
        return;
    }

    // Get filename from headers or generate one
    let filename = `submissions_${new Date().toISOString().split('T')[0]}.csv`;
    const disposition = res.headers['content-disposition'];
    if (disposition && disposition.includes('filename=')) {
        filename = disposition.split('filename=')[1].replace(/"/g, '');
    }

    const filePath = path.join(OUTPUT_DIR, filename);
    const fileStream = fs.createWriteStream(filePath);

    res.pipe(fileStream);

    fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Successfully downloaded to: ${filePath}`);
        console.log(`📊 File size: ${fs.statSync(filePath).size} bytes`);
    });
}).on('error', (err) => {
    console.error('❌ Error downloading file:', err.message);
});
