

//npx drizzle-kit push

import '@/drizzleEnv';  // This will load the env variables
import { defineConfig } from "drizzle-kit";

// console.log(combinedEnv);
console.log(process.env);

export default defineConfig({
  schema: "./lib/schema.ts",
  // out: "./drizzle/migrations",
  dialect: "postgresql",
  // driver: 'pg',
  dbCredentials: {
    url: process.env.POSTGRES_PRISMA_URL!,
  },
});
