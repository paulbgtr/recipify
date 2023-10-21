<script>
    /**
     * @type {number}
     */
    export let healthScore;    

    /**
     * @param {number} healthScore
     */
    const handleRateHealthScore = (healthScore) => {
        if (healthScore >= 80) {
            return 'success';
        } else if (healthScore >= 50) {
            return 'warning';
        } else {
            return 'error';
        }
    }
</script>

<div class="my-2">
  <span
    class={`p-2 font-bold rounded-xl bg-${handleRateHealthScore(healthScore)}`}
  >
    Health score: {healthScore}
  </span>
</div>
