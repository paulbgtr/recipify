<script>
    import { removeHTMLTags } from "$lib/utils/removeHTMLTags";

    /** @type {string} */
    export let imageUrl;

    /** @type {string} */
    export let title;

    /** @type {string}*/
    export let description;

    /** @type {string} */
    export let url;
</script>

<a class="duration-200 hover:opacity-80" href={url}>
  <div class="shadow-md card bg-base-100">
    <figure>
      <img src={imageUrl} alt={title} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {title}
      </h2>
      <p class="h-24 overflow-auto">
        {`${removeHTMLTags(description.slice(0, 100))}...`}
      </p>
    </div>
  </div>
</a>
