import db from "./db.ts";
import { users } from "./database/schema.ts";
import { eq } from "drizzle-orm";

async function main() {
    const dbusers = await db.query.users.findMany({
        where: eq(users.id, "2")
    })
}