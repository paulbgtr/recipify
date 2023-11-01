<script>
    let username = "";
    let password = "";

    const handleSubmit = async () => {
        const url = "http://localhost:3000"

        try {
        const res = await fetch(`${url}/signin`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })

        const json = await res.json()
        
        if (json.token) {
            localStorage.setItem("token", json.token)
        }
        } catch (err) {
            console.log(err);
        }
    }
</script>

<div class="shadow-xl card w-96">
  <form
    on:submit|preventDefault={handleSubmit}
    class="items-center text-center card-body"
  >
    <h2 class="card-title">Sign In</h2>
    <input
      type="text"
      bind:value={username}
      placeholder="Username"
      class="w-full max-w-xs input input-bordered"
    />
    <input
      type="password"
      bind:value={password}
      placeholder="Password"
      class="w-full max-w-xs input input-bordered"
    />
    <button class="w-full btn btn-primary">Sign in</button>
  </form>
  <p class="pb-4 italic text-center text-gray-400">
    Don't have an account? <a class="link" href="/signup">Sign up</a>.
  </p>
</div>
