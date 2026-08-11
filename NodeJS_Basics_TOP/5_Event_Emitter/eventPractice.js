#!/usr/bin/env node

import EventEmitter from 'node:events';
const eventEmitter = new EventEmitter();

// Create a 'start' event with a handler function
eventEmitter.on('start', (number) => {
    console.log(`started ${number}`);
})

// Trigger the 'start' event
eventEmitter.emit('start', 23);

console.log(eventEmitter.eventNames());