#!/usr/bin/env node

// Base syntax: new URL(input[,base])

const myURL = new URL('/foo', 'https://example.org:8080');
// https://example.org/foo

const secondURL = new URL('https://example.org/foo#baz');
// https://example.org/foo

console.log(myURL,secondURL.hash);