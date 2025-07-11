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
    margin: 50vh auto;
    width: 75%;
    /* background-color: --bone; */
    border: solid --rose 3px;
    padding: 20px;
    max-width: 700px;
    margin: 45vh auto;
  }
</style>
