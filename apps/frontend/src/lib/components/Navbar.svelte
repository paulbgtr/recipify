<script>
    import Search from "./Search.svelte";
    import { onMount } from "svelte";

    /**
     * @type {string | null}
     */
    let token;

    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    const handleProfileRedirect= () => {
        const username = localStorage.getItem("username");
        window.location.href = `/users/${username}`;
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/signin";
    }
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href="/" class="text-xl normal-case btn btn-ghost">🍳 Recipify</a>
  </div>
  <div class="flex-none gap-2">
    <Search />
    {#if token}
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <button on:click={handleProfileRedirect} class="justify-between"
              >Profile</button
            >
          </li>
          <li><a href="/my/settings">Settings</a></li>
          <li><button on:click={handleLogout}>Logout</button></li>
        </ul>
      </div>
    {:else}
      <a class="btn btn-outline btn-primary" href="/signin">Sign in</a>
    {/if}
  </div>
</div>
