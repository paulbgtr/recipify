import pkg from "pg";
const { Client } = pkg;
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./db/schema.js";
import { comments } from "./db/schema.js";
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
  return await db
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

/**
 * @param {number} recipe_id
 */
export const getCommentsByRecipeId = async (recipe_id) => {
  const res = await db
    .select()
    .from(comments)
    .where(eq(comments.recipe_id, recipe_id));
  return res;
};

/**
 * @param {number} recipe_id
 * @param {number} username
 * @param {number} rating
 * @param {string} body
 */
export const createComment = async (recipe_id, username, rating, body) => {
  return await db
    .insert(comments)
    .values({
      recipe_id,
      username,
      rating,
      body,
    })
    .returning();
};
