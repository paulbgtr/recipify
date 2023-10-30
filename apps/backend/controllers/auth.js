import { getUserByUsername, createUser } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await getUserByUsername(username);
    if (userExists) return res.status(400).send("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await createUser(username, email, hashedPassword);

    res.status(201).send(createdUser);
  } catch (err) {
    res
      .status(500)
      .send(
        "Error signing in. You should provide a username, email, and password as strings"
      );
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await getUserByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid username or password");
    }

    const token = jwt.sign({ sub: user.username }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.send({ token });
  } catch (err) {
    res
      .status(500)
      .send(
        "Error signing in. You should provide a username and password as strings"
      );
  }
};
