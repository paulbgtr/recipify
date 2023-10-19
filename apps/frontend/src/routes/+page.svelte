<script>
    import Card from "$lib/components/Card.svelte";
    import Shuffle from "$lib/components/Shuffle.svelte";

    export let data;

    const randomRecipes = data.props.randomRecipes;

    /**
     * @param {string} str
     * @returns {string}
     */
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*>?/gm, '');
    }
</script>

<section class="grid gap-5">
  <div>
    <div class="mb-3">
      <h2 class="font-bold text-2xl">Shuffled recipes that may interest you</h2>
      <p class="italic font-gray-500">
        (If you have special dietary requirements, you can set them in your <a
          class="link"
          href="/settings">settings</a
        >.)
      </p>
    </div>
    <Shuffle />
  </div>
  <div class="grid grid-cols-3 gap-3">
    {#each randomRecipes as recipe}
      <Card
        title={recipe.title}
        url="/recipes/test"
        description={removeHTMLTags(recipe.summary.slice(0, 150))}
        imageUrl={recipe.image}
      />
    {/each}
  </div>
</section>
