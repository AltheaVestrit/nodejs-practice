#!/usr/bin/env node

import fs from 'node:fs';
import fs_promises from 'node:fs/promises';

// ASYNCHRONOUS

fs.readFile('textFiles/appendContent.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Asynchronous: ', data);
});

// SYNCHRONOUS

try {
    const data = fs.readFileSync('textFiles/appendContent.txt', 'utf8');
    console.log('Synchronous: ', data);
  } catch (err) {
    console.error(err);
  }

// WITH PROMISES

async function example() {
    try {
        const data = await fs_promises.readFile('textFiles/appendContent.txt', { encoding: 'utf-8' });
        console.log('With promises: ', data);
    } catch (err) {
        console.error(err);
    }
};

example();