<script>
    import "../tailwind.css"

    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  <Navbar />
  <div class="container max-w-4xl mx-auto mt-5">
    <slot />
  </div>
</div>
