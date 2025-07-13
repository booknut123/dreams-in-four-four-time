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
        subtitle="&ldquo;Let&apos;s talk about our part / My heart to your heart / Let&apos;s talk about, let&apos;s talk about living&rdquo;"
        source="- Alicia Keys, &ldquo;We Are Here&rdquo;"
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Imagine if things were different. 
      </ArticleText>
      <ArticleText>
        Imagine Ari walking into a music tech class - one funded as well as suburban schools.
        She has a mentor in the music business and a laptop that never freezes mid-beat.
        Imagine if she had time — real time — to create.
      </ArticleText>
      <ArticleText>
        Her city would sound different. Her life would feel different.
      </ArticleText>
      <ArticleText>
        Ari’s beats are already good. But imagine how loud her dreams could grow - if we actually invested in her, and the millions like her.
      </ArticleText>
      <ArticleText>
        Talent like Ari’s is everywhere —
      </ArticleText>
      <ArticleText>
        in every city, every neighborhood, every home.
      </ArticleText>
      <ArticleText>
        But <em>talent</em> alone isn’t enough. <em>Opportunity</em> must meet it.
      </ArticleText>
      <ArticleText>
        Want to hear Ari’s beats? Want to help the next Ari?
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
    <p>Because when we invest in talent,<br />
    we don’t just change one life — <br />
    we change the soundtrack of our future.</p>
  </FullWidth>
</div>

