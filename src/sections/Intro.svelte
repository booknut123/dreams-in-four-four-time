<script>
  import Spacer from '../lib/Spacer.svelte';
</script>

<section class="intro">
  <div class="intro-content">
    <h1>Dreams in Four-Four Time</h1>
    <p>
      A scrollytelling journey following Ari — a 17-year-old aspiring music
      producer — as she navigates the systemic barriers shaping Black futures in
      America.
    </p>
    <h1>↓</h1>
    <p></p>
    <p></p>
  </div>
</section>

<Spacer />

<style>
  .intro {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
  }

  .intro::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("../lib/images/city-intro.jpg") center/cover no-repeat;
    opacity: 0.2;
    z-index: 0;
  }
  .intro::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 80%,
      #f0f4f6 100%
    );
    z-index: 1;
  }

  .intro-content {
    z-index: 2;
    max-width: 720px;
    padding: 2rem;
  }

  .intro-content h1 {
    font-family: "DM Serif Text", serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--pomp);
    text-shadow: 1px 1px 2px var(--black);
    margin-bottom: 1rem;
  }

  .intro-content p {
    font-size: 1.3rem;
    color: var(--black);
    line-height: 1.6;
  }
</style>
