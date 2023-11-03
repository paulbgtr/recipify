<script>
    /**
     * @type {string | null}
     */
    let token;

    /**
     * @type {string | null}
     */
    let username;

    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
        username = localStorage.getItem("username");
    }

    export let recipeId = "";
    export let rating = 0;

    let body = "";

    /**
     * @param {Object} data
     */
    const handleCreateComment = async (data) => {
        const url = "http://localhost:3000/comments"

        if (!token) return;

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            })

            const json = await res.text();

            console.log(json);
        } catch(err) {
            console.log(err);
        }
    }
</script>

<div class="flex gap-4 mb-5">
  <div class="avatar">
    <div class="w-16 h-16 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="flex flex-col w-full gap-3">
    <textarea
      bind:value={body}
      placeholder="Add a comment..."
      class="w-full textarea textarea-bordered textarea-md"
    />
    <button
      on:click={() => {
        handleCreateComment({
          recipe_id: recipeId,
          rating,
          body,
          username,
        });
      }}
      class="btn btn-primary">post</button
    >
  </div>
</div>
