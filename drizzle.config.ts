import { defineConfig } from "drizzle-kit";
import { cwd } from "process";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

export default defineConfig({
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
});
