import { loadEnvFile } from 'node:process';

loadEnvFile();

console.log(process.env.VIDEO_URL);