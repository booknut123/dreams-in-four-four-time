<script>
  export let scene = "";
  export let title = "";
  export let subtitle = "";
</script>

<section class="scene-heading">
  <div class="heading-wrapper">
    <h2>{scene}</h2>
    <h3>{title}</h3>
    {#if subtitle}
      <p>{subtitle}</p>
    {/if}
  </div>
</section>

<style>
  .scene-heading {
    padding: 1.5rem 2rem;
    text-align: center;
  }

  .scene-heading {
  background-color: #e3dede;
  border: 1px solid var(--asparagus);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.05);
}


  /* .heading-wrapper {
    max-width: 800px;
    margin: 0 auto;
  } */

  h2 {
    font-family: "DM Serif Text", serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--asparagus);
  }

  h3 {
    font-family: "Caveat", serif;
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--pomp);
    margin-bottom: 1rem;
  }

  p {
    font-family: "Space Grotesk", serif;
    font-size: 1.2rem;
    color: var(--rose);
    /* max-width: 600px; */
    /* margin: 0 auto; */
    /* line-height: 1.5; */
  }
</style>
