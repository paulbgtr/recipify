<script>
    import Card from "$lib/components/Card.svelte";
    import Shuffle from "$lib/components/Shuffle.svelte";

    export let data;

    let randomRecipes = data.props.randomRecipes;

    const handleUpdateRandomRecipes = async ()=> {
        randomRecipes = await data.props.handleFetchRandomRecipes();
    }
</script>

<section class="grid gap-5">
  <div>
    <div class="mb-3">
      <h2 class="text-2xl font-bold">Shuffled recipes that may interest you</h2>
      <p class="italic font-gray-500">
        (If you have special dietary requirements, you can set them in your <a
          class="link"
          href="/settings">settings</a
        >.)
      </p>
    </div>
    <Shuffle shuffleRecipes={handleUpdateRandomRecipes} />
  </div>
  <div
    class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4"
  >
    {#each randomRecipes as recipe}
      <Card
        title={recipe.title}
        url={`/recipes/${recipe.id}`}
        description={recipe.summary}
        imageUrl={recipe.image}
      />
    {/each}
  </div>
</section>
