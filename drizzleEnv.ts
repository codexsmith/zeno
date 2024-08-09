import { loadEnvConfig } from '@next/env';
import { resolve } from 'path';

const projectDir = process.cwd();

// loadEnvConfig(projectDir);
// const {combinedEnv} = loadEnvConfig(resolve(projectDir, '.env.development.local'));

// const envFile = resolve(projectDir, '.env.development.local');

// Load the specific env file
// const {combinedEnv} = loadEnvConfig(envFile);
loadEnvConfig(projectDir);

console.log(projectDir);

// export default combinedEnv;