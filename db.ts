import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import "dotenv/config";
import * as schema from './database/schema.ts';

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL as string);
const db = drizzle(queryClient, { schema });
// await db.select().from(...)...

export default db