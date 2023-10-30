import pkg from "pg";
const { Client } = pkg;
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./db/schema.js";
import { eq } from "drizzle-orm";
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

/**
 * @param {number} username
 */
export const getUserByUsername = async (username) => {
  const res = await db
    .select()
    .from(users)
    .where(eq(users.username, username));
  return res[0];
};

/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} jwt
 */
export const createUser = async (username, email, password) => {
  await db
    .insert(users)
    .values({
      username,
      email,
      password,
    })
    .returning({
      username: users.username,
      email: users.email,
    });
};
