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

  const recipeInfo = await handleFetchRecipe(recipeId);

  return {
    props: {
      ...recipeInfo,
    },
  };
};
