<script>
  let { layout, sticky, scrolly } = $props();
</script>

<div class="wrapper {layout}">
  <div class="sticky">
    {@render sticky()}
  </div>

  <div class="scrolly">
    {@render scrolly()}
  </div>
</div>

<style>
  .wrapper {
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .left .scrolly {
    order: 0;
  }
  .left .sticky {
    order: 1;
  }

  .right .scrolly {
    order: 1;
  }
  .right .sticky {
    order: 0;
  }

  .sticky,
  .scrolly {
    display: flex;
    flex-direction: column;
    flex: 1 1; /* Allows growing, shrinking */
  }

  .sticky {
    position: sticky;
    top: 50vh;
    transform: translateY(-50%);
    align-items: center;
    justify-content: center;
    z-index: 0;
    flex-shrink: 0;
    max-height: 80vh;
  }

  .scrolly {
    z-index: 1;
  }
</style>
