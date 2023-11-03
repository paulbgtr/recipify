<script>
    import { removeHTMLTags } from '$lib/utils/removeHTMLTags.js';
    import HealthScore from '$lib/components/HealthScore.svelte';
    import Rating from '$lib/components/Rating.svelte';
    import AddComment from '$lib/components/comment/AddComment.svelte';
    import Comment from '$lib/components/comment/Comment.svelte';
    
    export let data;

    let rating = 0;

    const instructions =  data.props.instructions[0].steps
    const comments = data.props.comments
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
      <div class="gap-3 p-2 my-1 rating">
        <div>
          <input
            on:click={() => (rating = 1)}
            type="radio"
            name="rating-3"
            class="bg-red-400 mask mask-heart"
          />
          <input
            on:click={() => (rating = 2)}
            type="radio"
            name="rating-3"
            class="bg-orange-400 mask mask-heart"
            checked
          />
          <input
            on:click={() => (rating = 3)}
            type="radio"
            name="rating-3"
            class="bg-yellow-400 mask mask-heart"
          />
          <input
            on:click={() => (rating = 4)}
            type="radio"
            name="rating-3"
            class="mask mask-heart bg-lime-400"
          />
          <input
            on:click={() => (rating = 5)}
            type="radio"
            name="rating-3"
            class="bg-green-400 mask mask-heart"
          />
        </div>

        <span class="font-bold"> 0 ratings </span>
      </div>
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
      <ul class="list-disc">
        {#each instructions as instruction}
          <li>{instruction.step}</li>
        {/each}
      </ul>
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
  <h2 class="mb-3 text-xl font-bold">Comments</h2>
  <AddComment recipeId={data.props.recipeId} {rating} />
  {#each comments as comment}
    <Comment
      username={comment.username}
      commentBody={comment.body}
      commentDate={comment.created_at}
      userAvatar="https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-enjoying-the-sunset-by-the-sea-free-photo.jpg?w=600&quality=80"
    />
  {/each}
</section>
