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
        scene=""
        title="Talent Is Everywhere. Opportunity Should Be, Too."
        subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Talent like Ari’s is everywhere —
      </ArticleText>
      <ArticleText>
        in every city, every neighborhood, every home.
      </ArticleText>
      <ArticleText>
        But talent alone isn’t enough.
      </ArticleText>
      <ArticleText>
        Opportunity must meet it.
      </ArticleText>
      <ArticleText>
        Want to hear Ari’s beats?
      </ArticleText>
      <ArticleText>
        Want to help fund the next Ari?
      </ArticleText>
      <ArticleText>
        Learn more about the realities shaping Black futures at the <strong><a href="blackwealthdata.org" target="_blank">Black Wealth Data Center.</a></strong>
      </ArticleText>
      <ArticleText>
        Support local Black-owned businesses.
      </ArticleText>
      <ArticleText>
        Advocate for equitable investment in education, housing, and entrepreneurship.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>Because when we invest in talent,</p>
    <p>we don’t just change one life —</p>
    <p>we change the soundtrack of our future.</p>
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
