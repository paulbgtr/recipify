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

/**
 *
 * @param {string} email
 */
export const getUserByEmail = async (email) => {
  const res = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  return res;
};

/**
 * @param {string} sessionToken
 */
export const getUserBySessionToken = async (sessionToken) => {
  const res = await db
    .select()
    .from(users)
    .where(eq(users.session_token, sessionToken));
  return res;
};

/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} salt
 * @param {string} session_token
 */
export const createUser = async (
  username,
  email,
  password,
  salt,
  session_token
) => {
  const res = await db
    .insert(users)
    .values({
      username,
      email,
      password,
      salt,
      session_token,
    })
    .returning({
      id: users.id,
      username: users.username,
      email: users.email,
    });
  return res;
};

/**
 * @param {number} id
 * @param {string} updatedUser
 */
export const updateUserById = async (id, updatedUser) => {
  await db
    .update(users)
    .set(updatedUser)
    .where(eq(users.id, id))
    .returning({
      id: users.id,
      username: users.username,
      email: users.email,
    });
};
