<script>
    import Card from "$lib/components/Card.svelte";
    import Shuffle from "$lib/components/Shuffle.svelte";
</script>

<section class="grid gap-5">
  <div>
    <div class="mb-3">
      <h2 class="font-bold text-2xl">Shuffled recipes that may interest you</h2>
      <p class="italic font-gray-500">
        (If you have special dietary requirements, you can set them in your <a
          href="/settings">settings</a
        >.)
      </p>
    </div>
    <Shuffle />
  </div>
  <div class="grid grid-cols-3 gap-3">
    <Card
      title="test"
      url="/recipes/test"
      description="test"
      imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2017/11/Vegetable-soup-recipes-1eb6583.jpg?resize=768,574"
    />
  </div>
</section>
