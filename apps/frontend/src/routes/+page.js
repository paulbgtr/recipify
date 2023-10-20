import { PUBLIC_SPOONACULAR_API_KEY } from "$env/static/public";

const handleFetchRandomRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${PUBLIC_SPOONACULAR_API_KEY}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const recipes = data.recipes;
    return recipes;
  } catch (err) {
    return err;
  }
};

/** @type {import('./$types').PageLoad} */
export const load = async () => {
  const randomRecipes = await handleFetchRandomRecipes();

  return {
    props: {
      randomRecipes,
      handleFetchRandomRecipes,
    },
  };
};
