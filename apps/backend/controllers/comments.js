import { getCommentsByRecipeId } from "../db.js";
import { createComment } from "../db.js";
import { getUserByUsername } from "../db.js";

export const getComments = async (req, res) => {
  try {
    const recipeId = req.params.recipeId;

    const comments = await getCommentsByRecipeId(recipeId);
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error getting comments" });
  }
};

export const postComment = async (req, res) => {
  try {
    const { recipe_id, username, rating, body } = req.body;

    const user = await getUserByUsername(username);

    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }

    const newComment = await createComment(recipe_id, username, rating, body);

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error posting comment" });
  }
};
