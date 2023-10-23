<script>
    import { removeHTMLTags } from '$lib/utils/removeHTMLTags.js';
    import HealthScore from '$lib/components/HealthScore.svelte';
    import Rating from '$lib/components/Rating.svelte';

    export let data;

</script>

<section class="grid gap-10 lg:grid-cols-2">
  <img
    class="w-full max-w-2xl rounded-xl"
    src={data.props.image}
    alt={data.props.title}
  />
  <div>
    <h1 class="text-2xl font-bold">{data.props.title}</h1>
    <div>
      <div class="my-3">
        <Rating />
        <HealthScore healthScore={data.props.healthScore} />
        <p>
          {data.props.servings}
          servings
        </p>
        <p>
          Will be ready in
          <span class="font-bold">
            {data.props.readyInMinutes}
            minutes
          </span>
        </p>
      </div>
      <h3 class="text-lg font-bold">
        Ingredients that you need to prepare this recipe
      </h3>
      {#each data.props.extendedIngredients as ingredient}
        <p>{ingredient.original}</p>
      {/each}
    </div>
  </div>
</section>

<h2 class="text-xl font-bold">Brief summary</h2>
<p>
  {removeHTMLTags(data.props.summary)}
</p>
