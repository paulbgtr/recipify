import pkg from "pg";
const { Client } = pkg;
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./db/schema.js";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DATABASE,
});

await client.connect();
const db = drizzle(client);

export const getUsers = async () => {
  const res = await db.select().from(users);
  return res;
};
