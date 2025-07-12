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
        title="Same stories, Different Cities"
        subtitle="Generational patterns. Cross-country echoes."
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
  <div class="scene-text">
    <ArticleText>
      You’d think things would change across state lines. But Oakland’s numbers mirror Atlanta’s.
    </ArticleText>
    <ArticleText>
      In Boston, the contrast is even starker. A Boston Federal Reserve Bank 2015 study reported that the median net worth of White households is <strong>$250,000</strong>. For Black households? Just <strong>$8</strong>.
    </ArticleText>
    </div>
  {/snippet}
</Scroller>

<FullWidth>
  <div class="dramatic-statement">
    <p>Not $800.</p>
    <p>Not $80.</p>
    <p><strong><em>Eight. Dollars.</em></strong></p>
  </div>
</FullWidth>

<Spacer />

<Scroller layout="left">
  {#snippet sticky()}
    <ArticleText>
      <Heading scene="" title="" subtitle="“It’s not about effort.”" />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <ArticleText>
      This isn’t about effort. Ari works hard. Her mom works hard. Zora works hard.
    </ArticleText>
    <ArticleText>
      This is about structures — about decades of underinvestment. About redlining and divestment and being told to “just build wealth” in a system designed to extract it.
    </ArticleText>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
      Ari's story is personal - but it's not rare. <br />
      The <em>dream</em> is <em>real</em>. <br />
      The <em>blocks</em> are <em>realer</em>. <br />
    </p>
  </FullWidth>
</div>

<style>
  .dramatic-statement {
    font-family: "Caveat", sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-align: center;
    color: var(--rose);
    line-height: 1.2;
    padding: 3rem 1rem;
  }
  .dramatic-statement p {
    margin: 0.5rem 0;
  }
  </style>
  
