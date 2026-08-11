#!/usr/bin/env node

async function main() {
    const response = await fetch('http://localhost:8000');
    const data = await response.json();
    console.log(data);
};

main().catch(console.error);