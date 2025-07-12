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
        scene="Scene 6"
        title="Echoes of a Future"
        subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
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
      </ArticleText>
      <ArticleText>
        Imagine her with a mentor in the music business. Imagine her with a laptop that never freezes mid-beat.
      </ArticleText>
      <ArticleText>
        Imagine if she had time — real time — to create.
      </ArticleText>
      <ArticleText>
        Her city would sound different. Her life would feel different.
      </ArticleText>
      <ArticleText>
        Ari’s beats are already good. But imagine how loud her dreams could grow - if we actually invested in her, and the millions like her.
      </ArticleText>
      <ArticleText>
        What happens when we stop just celebrating Black culture - and start funding it?
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

