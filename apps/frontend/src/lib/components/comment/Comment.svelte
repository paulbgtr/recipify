<script>
    /**
     * @type {string}
     */
    export let username;
    /**
     * @type {string}
     */
    export let userAvatar;
    /**
     * @type {string}
     */
    export let commentBody;
    /**
     * @type {string}
     */
    export let commentDate;
</script>

<div class="flex gap-3">
  <div class="avatar">
    <div class="w-24 rounded-full">
      <img src={userAvatar} alt={username} />
    </div>
  </div>
  <div>
    <div class="flex gap-3">
      <h5 class="text-xl font-bold">{username}</h5>
      <span class="text-sm italic text-gray-500">{commentDate}</span>
    </div>
    <p class="text-gray-500">
      {commentBody}
    </p>
    <div class="mt-3">
      <button>Reply</button>
      <button>Share</button>
      <button>
        <svg
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <button>
        <svg
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
