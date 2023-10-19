<script>
    /** @type {string} */
    export let imageUrl;

    /** @type {string} */
    export let title;

    /** @type {string}*/
    export let description;

    /** @type {string} */
    export let url;
</script>

<a class="hover:opacity-80 duration-200" href={url}>
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <img src={imageUrl} alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  </div>
</a>
