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
        scene="Scene 5"
        title="Same Story, Different Cities"
        subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        You’d think things would change across state lines. But Oakland’s numbers mirror Atlanta’s.
      </ArticleText>
      <ArticleText>
        In Boston, the contrast is even starker. The median net worth of White households is $247,500. For Black households? Just $8.
      </ArticleText>
      <ArticleText>
        Not $800. Not $80. 
      </ArticleText>
      <ArticleText>
        Eight. Dollars.
      </ArticleText>
      <ArticleText>
        This isn’t about effort. Ari works hard. Her mom works hard. Zora works hard.
      </ArticleText>
      <ArticleText>
        This is about structures - about decades of underinvestment. About redlining and divestment and being told to “just build wealth” in a system designed to extract it.
      </ArticleText>
      <ArticleText>
        Ari story is personal — but it’s not rare.
      </ArticleText>
      <ArticleText>
        The dream is real.
      </ArticleText>
      <ArticleText>
        The blocks are realer.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<!-- <div class="full-width-text">
  <FullWidth>
    <p>
      In a country where <strong>opportunity</strong> should meet
      <strong>talent</strong>, Ari often finds
      <em>silence</em> where there should be <em>sound</em>.
    </p>
  </FullWidth>
</div> -->

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
