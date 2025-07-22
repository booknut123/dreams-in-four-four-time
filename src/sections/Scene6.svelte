<script>
  // component imports
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import Spacer from "../lib/Spacer.svelte";

  // reality interactive configuration
  let supports = [false, false, false, false, false];
  let supportsNames = [
    "A music tech class at school",
    "A mentor in the music industry",
    "Startup capital for her business",
    "Free transit to opportunities",
    "Time to create",
  ];

  $: checkedCount = supports.filter(Boolean).length;

  $: messages = [
    "Help Ari by selecting the supports above!",
    "With one support, Ari's path gets a little clearer...",
    "Two supports mean Ari can start building something real...",
    "Three supports give Ari the foundation she needs...",
    "Four supports mean Ari's dreams have room to grow...",
    "With all five supports, Ari's beats are finally loud enough to change the world. 🎵",
  ];

  $: resultMessage = messages[checkedCount];

  // horizontal scroll section configuration
  import { onMount } from "svelte";
  import Lenis from "lenis";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const lenis = new Lenis({
      wrapper: document.documentElement,
      content: document.body,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Horizontal scroll
    const horizontalContainer = document.querySelector(".horizontal-container");
    const wrapper = document.querySelector(".horizontal-content-wrapper");
    const boxes = document.querySelectorAll(".horizontal-content");

    if (horizontalContainer && wrapper && boxes.length > 0) {
      const containerWidth = window.innerWidth;
      const boxWidth = 500;
      const spacing = 40; // CSS Margin: 20px on each side

      // Calculate total width and scroll distance (to start off screen and scroll to other side)
      const totalWidth = (boxWidth + spacing) * boxes.length;
      const scrollDistance = totalWidth + containerWidth;

      // Create timeline - https://gsap.com/docs/v3/Plugins/ScrollTrigger/
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: horizontalContainer,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        wrapper,
        { x: containerWidth }, // off-screen to the right
        { x: -totalWidth - containerWidth, ease: "none" } // offscreen to the left
      );
    }

    ScrollTrigger.refresh();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  });
</script>

<Spacer />
<Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="// Track 6"
        title="Loud Enough to Change (Outro)"
        subtitle="&ldquo;Let&apos;s talk about our part / My heart to your heart / Let&apos;s talk about, let&apos;s talk about living&rdquo;"
        source="- Alicia Keys, &ldquo;We Are Here&rdquo;"
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <div class="thought">
        <ArticleText>
          Sometimes I close my eyes and imagine what it would sound like if
          things were different. If my dreams had the same volume as my talent.
        </ArticleText>
      </div>
      <ArticleText>
        Imagine Ari walking into a music tech class - one funded as well as
        suburban schools. She has a mentor in the music business and a laptop
        that never freezes mid-beat. Imagine if she had time - real time - to
        create.
      </ArticleText>
      <ArticleText>
        Her city would sound different. Her life would feel different.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <div class="interactive-element">
        <h3>Remix Reality</h3>
        {#each supports as checked, index}
          <label class="reality-toggles">
            <input type="checkbox" bind:checked={supports[index]} />
            {supportsNames[index]}
          </label>
        {/each}
        <p class="reality-result">{resultMessage}</p>
      </div>
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari's beats are already good. But imagine how loud her dreams could grow
        - if we actually invested in her, and the millions like her.
      </ArticleText>
      <ArticleText>Talent like Ari's is everywhere -</ArticleText>
      <ArticleText>in every city, every neighborhood, every home.</ArticleText>
      <ArticleText>
        But <em>talent</em> alone isn't enough. <em>Opportunity</em> must meet it.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="horizontal-container">
  <div class="horizontal-content-wrapper">
    <div class="horizontal-content">
      <h2>🎵 Hear Ari's Story</h2>
      <p>Want to hear Ari's beats? Want to help the next Ari?</p>
      <p>Every beat tells a story. Every story deserves to be heard.</p>
    </div>

    <div class="horizontal-content">
      <h2>📊 Learn the Data</h2>
      <p>
        Learn more about the realities shaping Black futures at the
        <strong>
          <a href="https://blackwealthdata.org" target="_blank">
            Black Wealth Data Center.
          </a>
        </strong>
      </p>
      <p>Understanding the gap is the first step to bridging it.</p>
    </div>

    <div class="horizontal-content">
      <h2>🏪 Support Locally</h2>
      <p>Support local Black-owned businesses.</p>
      <p>Every dollar spent is a vote for the future you want to see.</p>
    </div>

    <div class="horizontal-content">
      <h2>🗳️ Advocate for Change</h2>
      <p>
        Advocate for equitable investment in education, housing, and
        entrepreneurship.
      </p>
      <p>Policy changes create pathways. Pathways create possibilities.</p>
    </div>
  </div>
</div>

<style>
  /* remix reality */
  label {
    padding-left: 10%;
    margin-bottom: 1rem;
    display: flex;
    cursor: pointer;
    border-radius: 8px;
  }

  label:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .reality-toggles input[type="checkbox"] {
    margin-right: 1rem;
    transform: scale(1.2);
    accent-color: var(--asparagus);
  }

  .reality-result {
    padding: 0.5rem;
    border-radius: 10px;
    border-left: 4px solid var(--asparagus);
    border-right: 4px solid var(--asparagus);
  }

  /* horizontal scrolls */
  .horizontal-container {
    height: 100vh;
    overflow: hidden;
  }

  .horizontal-content {
    transition: transform 0.3s ease;
  }

  .horizontal-content:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .horizontal-content-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .horizontal-content {
    width: 500px;
    height: 300px;
    margin: 0 20px; /* in line with above */
    flex-shrink: 0; /* boxes stay the same size */
    padding: 20px;

    border: 5px solid #bdb3b2;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 2px 4px 10px var(--asparagus);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
  }
</style>
