<script>
  let { children } = $props();
</script>

<div class="article-text">
  <p>
    {@render children()}
  </p>
</div>

<style>
  .article-text {
    width: 75%;
    padding: 20px;
    max-width: 700px;
    margin: 45vh auto;
  }
</style>
