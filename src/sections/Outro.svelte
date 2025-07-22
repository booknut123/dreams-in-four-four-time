<script>
  import { onMount } from "svelte";

  let isVisible = false;
  let outroElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === outroElement) {
            isVisible = entry.isIntersecting;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (outroElement) {
      observer.observe(outroElement);
    }

    return () => observer.disconnect();
  });
</script>


<section class="outro" bind:this={outroElement}>
  <div class="outro-content" class:visible={isVisible}>
    <div class="text-container">
      <p class="outro-text line-1" class:animate={isVisible}>
        Because when we invest in talent,
      </p>
      <p class="outro-text line-2" class:animate={isVisible}>
        we don't just change one life -
      </p>
      <p class="outro-text line-3" class:animate={isVisible}>
        we change the <span class="highlight">soundtrack</span> of our future.
      </p>
      <br />
      <p class="outro-text line-3" class:animate={isVisible}>🎵</p>
    </div>
  </div>
</section>

<style>
  .outro {
    height: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      #f0f4f6 0%,
      #f9f6f0 25%,
      #f0d1d1 60%,
      #c5c4d4 95%,
      var(--black) 100%
    );
    overflow: hidden;
  }

  .outro::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .outro-content {
    position: absolute;
    z-index: 2;
    text-align: center;
    padding: 2rem;
    transform: translateY(50px);
    opacity: 0;
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .outro-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .text-container {
    position: relative;
    z-index: 3;
  }

  .outro-text {
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.4;
    margin: 0.5rem 0;
    color: var(--black, #1e1e1e);
    text-shadow:
      1px 1px 3px rgba(255, 255, 255, 0.9),
      0 0 25px rgba(255, 255, 255, 0.6);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .line-1.animate {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }

  .line-2.animate {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.6s;
  }

  .line-3.animate {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.9s;
  }

  .highlight {
    font-family: "Caveat", cursive;
    color: var(--asparagus, #7a9376);
    font-size: 1.2em;
    text-shadow:
      2px 2px 4px rgba(255, 255, 255, 0.9),
      0 0 35px rgba(122, 147, 118, 0.5),
      0 0 70px rgba(122, 147, 118, 0.3);
    animation: gentle-pulse 3s ease-in-out infinite;
  }

  @keyframes gentle-pulse {
    0%,
    100% {
      filter: brightness(1);
      transform: scale(1);
    }
    50% {
      filter: brightness(1.2);
      transform: scale(1.05);
    }
  }
</style>
