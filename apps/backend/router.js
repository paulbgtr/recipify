import express from "express";
import { getAllUsers } from "./controllers/users.js";
import { signUp } from "./controllers/auth.js";
import { signIn } from "./controllers/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});
router.get("/users", getAllUsers);
router.post("/signup", await signUp);
router.post("/signin", await signIn);

export default router;
