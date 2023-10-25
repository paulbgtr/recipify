import { PUBLIC_SPOONACULAR_API_KEY } from "$env/static/public";

export const load = async ({ params }) => {
  const recipePart = params.slug;

  /**
   *
   * @param {string} recipePart
   */
  const handleFetchRecipe = async (recipePart) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipePart}&apiKey=${PUBLIC_SPOONACULAR_API_KEY}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  };

  const extractedData = await handleFetchRecipe(recipePart);
  const matchedRecipes = extractedData.results;

  const searchParams = params.slug;

  return {
    props: {
      matchedRecipes,
      searchParams,
    },
  };
};
