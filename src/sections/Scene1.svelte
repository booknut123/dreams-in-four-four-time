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
        scene="// Track 1"
        title="Quiet Block, Loud Dreams (Intro)"
        subtitle="&ldquo;We must begin to tell our young /
                  There&apos;s a world waiting for you /
                Yours is the quest that&apos;s just begun&rdquo;"
        source="- Nina Simone, &ldquo;To Be Young, Gifted and Black&rdquo;"
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <div class="thought">
        <ArticleText>
          <i
            >Sometimes, I don't even notice it's 2 AM until I hear Mom come in.
            She thinks I'm sleeping. But this beat needs to breathe.</i
          >
        </ArticleText>
      </div>
      <ArticleText>
        Ari is seventeen, and her dreams are <em>loud.</em> Not just loud in volume
        - loud in vision. She wants to produce music that makes the world stop.
      </ArticleText>
      <ArticleText>
        She lives in a quiet block on the southwest side of Atlanta, where the
        bass from passing cars is sometimes the only reminder that something big
        is always happening - even when no one’s looking.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <div class="visual-content">
        <div id="ari-studio" class="visual-content-container">
          <div class="visual-content-title">Ari's Bedroom Studio</div>
          <div class="visual-content-emoji">🎹</div>
          <p class="visual-content-caption">
            Years-old beat pad, barely-held-together-laptop, notebook, dreams
          </p>
        </div>
      </div>
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari’s bedroom doubles as a studio. A beat pad, a laptop held together
        with stickers, a notebook full of bars and business ideas. She's already
        imagining her own producer tag.
      </ArticleText>
      <ArticleText>
        <em>But dreaming doesn’t pay rent.</em> And in Ari’s world, dreaming often
        comes last - after school, after helping out at home, and (hopefully soon)
        after her part-time job.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
      In a country where <em>opportunity</em> should meet
      <em>talent</em>, Ari often finds
      <em>silence</em> where there should be <em>sound</em>.
    </p>
  </FullWidth>
</div>

<style>
  .visual-content {
    border: 5px solid #bdb3b2;
    padding: 2.5rem;
    margin: 2rem auto;
    max-width: 800px;
    box-shadow: 2px 4px 10px var(--asparagus);
    border-radius: 15px;
  }

  .visual-content-title {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--asparagus);
    font-size: x-large;
    margin-bottom: 20px;
    text-align: center;
  }

  .visual-content p {
    font-size: 1.2rem;
    color: var(--rose);
  }

  .visual-content-emoji,
  .visual-content-caption {
    text-align: center;
  }

  .visual-content-emoji {
    font-size: 3rem;
    margin: 20px 0;
    opacity: 0.8;
  }
</style>
