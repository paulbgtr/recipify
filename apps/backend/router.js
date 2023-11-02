import express from "express";
import { getAllUsers } from "./controllers/users.js";
import { signUp } from "./controllers/auth.js";
import { signIn } from "./controllers/auth.js";
import { getComments } from "./controllers/comments.js";
import { postComment } from "./controllers/comments.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/users", getAllUsers);

router.post("/signup", await signUp);
router.post("/signin", await signIn);

router.get("/comments/:recipeId", await getComments);
router.post("/comments", await postComment);

export default router;
