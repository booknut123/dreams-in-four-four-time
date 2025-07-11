<script>
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
</script>

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="Scene 1"
        title="Quiet Block, Loud Dreams"
        subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari is seventeen, and her dreams are <strong>loud.</strong> Not just loud
        in volume — loud in vision. She wants to produce music that makes the world
        stop.
      </ArticleText>
      <ArticleText>
        She lives in a quiet block on the southwest side of Atlanta, where the
        bass from passing cars is sometimes the only reminder that something big
        is always happening — even when no one’s looking.
      </ArticleText>
      <ArticleText>
        Ari’s bedroom doubles as a studio. A beat pad, a laptop held together
        with stickers, a notebook full of bars and business ideas. She's already
        imagining her own producer tag.
      </ArticleText>
      <ArticleText>
        <em>But dreaming doesn’t pay rent.</em> And in Ari’s world, dreaming often
        comes last — after school, after helping out at home, after figuring out
        how to get to the other side of the city to record with friends.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
      In a country where <strong>opportunity</strong> should meet
      <strong>talent</strong>, Ari often finds
      <em>silence</em> where there should be <em>sound</em>.
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
