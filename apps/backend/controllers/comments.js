import { getCommentsByRecipeId } from "../db.js";
import { createComment } from "../db.js";

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
    const { recipe_id, user_id, rating, body } = req.body;

    const newComment = await createComment(recipe_id, user_id, rating, body);

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error posting comment" });
  }
};
