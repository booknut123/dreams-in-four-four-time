<script>
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
  import Spacer from "../lib/Spacer.svelte";
</script>

<Spacer /> <Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="Scene 4"
        title="A Beat Store of Her Own"
        subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari wants to sell beats online. She’s seen other producers on YouTube racking up thousands in monthly sales. She imagines uploading samples, branding her sound, building her empire.
      </ArticleText>
      <ArticleText>
        She even has a name picked out: 808 Blossom.
      </ArticleText>
      <ArticleText>
        But when she sits down to get started, the barriers stack up fast.
      </ArticleText>
      <ArticleText>
        It costs $100 just to register a business in Georgia. Then there’s the domain names, software licenses, marketing tools - not to mention gear.
      </ArticleText>
      <ArticleText>
        Loans? Credit? She doesn't have any. And neither does her mom.
      </ArticleText>
      <ArticleText>
        In Atlanta, despite being a majority Black city, only 2.1% of businesses are Black-owned.
      </ArticleText>
      <ArticleText>
        Ari’s not asking for a shortcut — just a runway.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
      Talent without capital is like a song without a speaker. Who’s going to hear it?
    </p>
  </FullWidth>
</div>

<style>
  .scene-text {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--black);
    max-width: 640px;
    text-align: left;
  }

  .scene-text strong, .full-width-text strong {
    color: var(--pomp);
    font-weight: 600;
  }

  .scene-text em, .full-width-text em {
    color: var(--rose);
  }

  .full-width-text {
    justify-content: center;
    align-items: center;
  }
</style>
