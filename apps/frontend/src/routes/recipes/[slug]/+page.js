import { PUBLIC_SPOONACULAR_API_KEY } from "$env/static/public";

export const load = async ({ params }) => {
  const recipeId = params.slug;

  /**
   *
   * @param {string} recipeId
   */
  const handleFetchRecipe = async (recipeId) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${PUBLIC_SPOONACULAR_API_KEY}`;

    try {
      const res = await fetch(url, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      return data;
    } catch (err) {
      return err;
    }
  };

  /**
   *
   * @param {string} recipeId
   */
  const handleFetchInstructions = async (recipeId) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${PUBLIC_SPOONACULAR_API_KEY}`;

    try {
      const res = await fetch(url, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      return data;
    } catch (err) {
      return err;
    }
  };

  /**
   * @param {string} recipeId
   */
  const handleFetchComments = async (recipeId) => {
    const url = "http://localhost:3000";

    try {
      const res = await fetch(`${url}/comments/${recipeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();

      return json;
    } catch (err) {
      console.log(err);
    }
  };

  const recipeInfo = await handleFetchRecipe(recipeId);
  const instructions = await handleFetchInstructions(recipeId);
  const comments = await handleFetchComments(recipeId);

  return {
    props: {
      ...recipeInfo,
      instructions,
      comments,
    },
  };
};
