<script>
    /**@type {() => Promise<void>} */
    export let shuffleRecipes;
</script>

<button on:click={shuffleRecipes} class="btn btn-neutral">🎲 Shuffle</button>
