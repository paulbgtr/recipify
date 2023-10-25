<script>
    import Card from '$lib/components/Card.svelte';   

    export let data;
</script>

<h1>Search</h1>

<div
  class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4"
>
  {#each data.props.matchedRecipes as recipe}
    <Card
      title={recipe.title}
      url={`/recipes/${recipe.id}`}
      imageUrl={recipe.image}
    />
  {/each}
</div>
