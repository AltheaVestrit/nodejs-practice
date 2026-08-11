const fs = require('fs');

// 1. READING FILES
// the callback function will be fired when readfile is completed
function read() {
    fs.readFile('./docs/blog1.txt', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.toString());
    })
    console.log('last line');
}
// read();


// 2. WRITING FILES
function write() {
    fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
        console.log('file was written');
    });

    fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
        console.log('file was written');
    });
}
// write();

// 3. DIRECTORIES
function directories() {
    if (fs.existsSync('./assets')) {
        // ^ this is a synchronous method, so it will pause further code execution until this method fully executed
        fs.rmdir('./assets', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('folder deleted');
        });
    } else {
        fs.mkdir('./assets', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('folder created');
        });
    }
}
// directories();

// 4. DELETING FILES
function deleting() {
    if (fs.existsSync('./docs/deleteme.txt')) {
        fs.unlink('./docs/deleteme.txt', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('file deleted');
        });
    }
}
// deleting();