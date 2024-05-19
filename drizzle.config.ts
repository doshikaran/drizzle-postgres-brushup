

import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    schema: "./database/schema.ts",
  dialect: "postgresql", // "mysql" | "sqlite"
  out: "./drizzle/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL as string
  }
});