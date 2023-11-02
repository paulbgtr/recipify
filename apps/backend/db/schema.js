import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  recipe_id: integer("recipe_id").notNull(),
  user_id: text("user_id").notNull(),
  rating: integer("rating")
    .notNull()
    .default(0),
  body: text("body").notNull(),
  likes: integer("likes")
    .notNull()
    .default(0),
  created_at: timestamp("created_at")
    .notNull()
    .defaultNow(),
});
