<script>
    import "../tailwind.css"

    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  <Navbar />
  <div class="grid py-3 sm:px-6 md:px-12 lg:px-24">
    <slot />
  </div>
</div>
