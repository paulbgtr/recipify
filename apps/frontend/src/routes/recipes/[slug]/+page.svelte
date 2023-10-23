<script>
    import { removeHTMLTags } from '$lib/utils/removeHTMLTags.js';
    import HealthScore from '$lib/components/HealthScore.svelte';
    import Rating from '$lib/components/Rating.svelte';
    import AddComment from '$lib/components/comment/AddComment.svelte';
    import Comment from '$lib/components/comment/Comment.svelte';

    export let data;

    const instructions =  data.props.instructions[0].steps
</script>

<section>
  <div class="grid gap-10 lg:grid-cols-2">
    <img
      class="w-full max-w-md rounded-xl"
      src={data.props.image}
      alt={data.props.title}
    />
    <div>
      <h1 class="text-2xl font-bold">{data.props.title}</h1>
      <div class="italic text-gray-500">
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
      <Rating />
      <HealthScore healthScore={data.props.healthScore} />
    </div>
  </div>
  <div class="mt-3">
    <div>
      <h3 class="w-1/2 text-lg font-bold">Ingredients</h3>
      {#each data.props.extendedIngredients as ingredient}
        <p>{ingredient.original}</p>
      {/each}
    </div>
    <div>
      <h3 class="w-1/2 text-lg font-bold">Steps</h3>
      {#each instructions as instruction}
        <p>{instruction.step}</p>
      {/each}
    </div>
  </div>
  <div class="mt-3">
    <h2 class="text-xl font-bold">Brief summary</h2>
    <p>
      {removeHTMLTags(data.props.summary)}
    </p>
  </div>
</section>

<div class="divider" />

<section>
  <h2 class="mb-3 text-xl font-bold">0 Comments</h2>
  <AddComment />
  <Comment />
</section>
