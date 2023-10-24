import { PUBLIC_SPOONACULAR_API_KEY } from "$env/static/public";

export const load = async ({ params }) => {
  const recipePart = params.slug;

  /**
   *
   * @param {string} recipePart
   */
  const handleFetchRecipe = async (recipePart) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?${PUBLIC_SPOONACULAR_API_KEY}&${recipePart}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  };

  const data = await handleFetchRecipe(recipePart);

  return {
    props: {
      data,
    },
  };
};
