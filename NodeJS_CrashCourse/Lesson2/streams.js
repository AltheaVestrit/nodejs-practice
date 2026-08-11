// Streaming: start using the data while it is still loading
// The process: a buffer is filled with data, and whenever the buffer is filled completely, that chunk is sent to the receiver. Then the buffer start filling up again for the next chunk.\

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK ------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// PIPING
readStream.pipe(writeStream);