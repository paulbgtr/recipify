<script>
    let newUsername = ""
    let newEmail = ""
    let newPassword = ""

    const handleUpdateUsername = async () => {
        //todo
    }

    const handleUpdateEmail = async () => {
        //todo
    }

    const handleUpdatePassword = async () => {
        //todo
    }
</script>

<h1 class="text-2xl font-bold">Settings</h1>

<div class="w-full max-w-xs form-control">
  <label class="label">
    <span class="label-text">Update username</span>
  </label>
  <div class="join">
    <input
      bind:value={newUsername}
      type="text"
      placeholder="Type here"
      class="w-full max-w-xs join-item input input-bordered"
    />
    <button on:click={handleUpdateUsername} class="btn btn-primary join-item"
      >Update</button
    >
  </div>
</div>

<div class="w-full max-w-xs form-control">
  <label class="label">
    <span class="label-text">Update email</span>
  </label>
  <div class="join">
    <input
      bind:value={newEmail}
      type="email"
      placeholder="Type here"
      class="w-full max-w-xs join-item input input-bordered"
    />
    <button on:click={handleUpdateEmail} class="btn btn-primary join-item"
      >Update</button
    >
  </div>
</div>

<div class="w-full max-w-xs form-control">
  <label class="label">
    <span class="label-text">Update password</span>
  </label>
  <div class="join">
    <input
      bind:value={newPassword}
      type="password"
      placeholder="Type here"
      class="w-full max-w-xs join-item input input-bordered"
    />
    <button on:click={handleUpdatePassword} class="btn btn-primary join-item"
      >Update</button
    >
  </div>
</div>
