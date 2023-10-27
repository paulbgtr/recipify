import { getUsers } from "../db.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};
