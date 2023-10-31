<script>
    import "../tailwind.css"
    import {page } from "$app/stores";

    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  {#if $page.url.pathname !== "/signup" && $page.url.pathname !== "/signin"}
    <Navbar />
  {/if}
  <div class="container max-w-4xl mx-auto mt-5">
    <slot />
  </div>
</div>
