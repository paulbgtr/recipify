<script>
    import { goto } from "$app/navigation";

    /**
     * @type {string | null}
     */
    let token;

    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
        if (!token) goto("/signin")
    }
</script>

<slot />
