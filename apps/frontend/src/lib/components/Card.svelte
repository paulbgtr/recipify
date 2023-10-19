<script>
    /** @type {string} */
    export let imageUrl;

    /** @type {string} */
    export let title;

    /** @type {string}*/
    export let description;

    /** @type {string} */
    export let url;

    /**
     * @param {string} str
     * @returns {string}
     */
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*>?/gm, '');
    }
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
      <p class="overflow-auto h-24">
        {removeHTMLTags(description.slice(0, 150))}
      </p>
    </div>
  </div>
</a>
