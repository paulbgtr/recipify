<script>
    import { isValidEmail } from "$lib/helpers/isValidEmail";

    let username = "";
    let email = "";
    let password = "";
    let repeatPassword = "";

    /**
     * @param {string} password
     * @param {string} repeatPassword
     */
    const arePasswordsMatched= (password, repeatPassword) => {
        return password === repeatPassword;
    }

    const handleSubmit = async () => {
        if (!isValidEmail(email)) return;
        if (!arePasswordsMatched(password, repeatPassword)) return;

        const url = "http://localhost:3000"

        try {
            const res = await fetch(`${url}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            })            

            const json = await res.json()

            console.log(json);
        } catch(err) {
            // todo: handle error
            console.log(err);
        }
    }
</script>

<div class="shadow-xl card w-96">
  <form
    on:submit|preventDefault={handleSubmit}
    class="items-center text-center card-body"
  >
    <h2 class="card-title">Sign Up</h2>
    <input
      type="text"
      required
      bind:value={username}
      placeholder="Username"
      class="w-full max-w-xs input input-bordered"
    />
    <input
      type="email"
      required
      bind:value={email}
      placeholder="Email"
      class="w-full max-w-xs input input-bordered"
    />
    <input
      type="password"
      required
      bind:value={password}
      placeholder="Password"
      class="w-full max-w-xs input input-bordered"
    />
    <input
      type="password"
      required
      bind:value={repeatPassword}
      placeholder="Repeat password"
      class="w-full max-w-xs input input-bordered"
    />
    <button class="w-full btn btn-primary">Sign Up</button>
  </form>
  <p class="pb-4 italic text-center text-gray-400">
    Already have an account? <a class="link" href="/signin">Sign In</a>
  </p>
</div>
