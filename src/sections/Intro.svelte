<script>
  import Spacer from "../lib/Spacer.svelte";
</script>

<section class="intro">
  <div class="intro-content">
    <h1 class="title">Dreams in Four-Four Time</h1>
    <p class="subtitle">
      A scrollytelling journey following Ari - a 17-year-old aspiring music
      producer - as she navigates the systemic barriers shaping Black futures in
      America.
    </p>
<<<<<<< HEAD
    <p>Make sure to turn on sound!</p>
=======
>>>>>>> bfe5d9637c1e316edad953b06d5342a77a3a0e04
    <h1 class="scroll-indicator">↓</h1>
    <p></p>
    <p></p>
  </div>
</section>

<Spacer />

<style>
  .intro {
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
    opacity: 0.25;
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

  .title {
    font-family: "Caveat", sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--pomp);
    text-shadow:
      1px 1px 2px var(--black),
      0 0 30px rgb(255, 217, 0);
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--black);
    line-height: 1.6;
  }

  .scroll-indicator {
    font-family: "Caveat", sans-serif;
    font-size: clamp(2.5rem, 3vw, 4rem);
    color: var(--pomp);
    margin-bottom: 1rem;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-10px) translateX(-50%);
    }
    60% {
      transform: translateY(-5px) translateX(-50%);
    }
  }
</style>
