#!/usr/bin/env node

import fs from 'node:fs';
import fs_promises from 'node:fs/promises';

const content = 'Blabla';
const path = 'textFiles/before.txt';

// ASYNCHRONOUS

fs.writeFile(path, content, err => {
    if(err) {
        console.error(err);
    } else {
        console.log(`Content '${content}' successfully written to ${path}.`);
    }
});

fs.rename('textFiles/before.txt', 'textFiles/after.txt', err => {
  if (err) {
    return console.error(err);
  }

    // done
});

// SYNCHRONOUS

try {
    fs.writeFileSync('textFiles/syncFile.txt', 'This file was written synchronously');
} catch (err) {
    console.error(err);
}

// USING PROMISES

async function example() {
    try {
        const content = 'Some content!';
        await fs_promises.writeFile('textFiles/promisesFile.txt', content);
    } catch (err) {
        console.log(err);
    }
};

example();

// APPENDING CONTENT

async function appendContent() {
    fs.writeFile('textFiles/appendContent.txt', ' Some content appended!', { flag: 'a+'}, err => {
        if (err) {
            return console.error(err);
        }
    })
}

appendContent();