async function main() {
    const response = await fetch('http://localhost:3000/about');
    const data = await response.text();
    console.log(data);
}

main().catch(console.error);