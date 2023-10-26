<script>
  import { goto } from '$app/navigation';
    import Card from '$lib/components/Card.svelte';   

    export let data;

    /**
     * 
     * @param {*} e
     */
    const onSubmit = e => {
        const formData = new FormData(e.target);

        /**
         *  @type {*}
         */
        const data = {}

        for (let field of formData) {
            const [key,value ]= field
            data[key]=  value
        }

        goto(`/search/${data.search}`)
    }
</script>

<form on:submit|preventDefault={onSubmit} class="w-full join">
  <input
    type="text"
    name="search"
    value={data.props.searchParams}
    placeholder="Type here"
    class="w-full mb-10 join-item input input-bordered"
  />
  <button class="btn join-item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  </button>
</form>

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
