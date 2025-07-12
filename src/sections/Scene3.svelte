<script>
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
  import Spacer from "../lib/Spacer.svelte";
</script>

<Scroller layout="left">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="Scene 3"
        title="Rent Eats the Rhythm"
        subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari’s spending the summer in Oakland, crashing on an air mattress in her cousin Zora’s tiny apartment. 
      </ArticleText>
      <ArticleText>
        Zora is 21 and lives in a tiny one-bedroom. The bedroom was supposed to be temporary - just until she saved enough to finish her degree.
      </ArticleText>
      <ArticleText>
        Rent is $1,900. Her job pays $18/hr. After bills, she’s lucky to have $150 left. 
      </ArticleText>
      <ArticleText>
        The city hums with opportunity - tech hubs, start-ups, studios - but Zora’s only studio is her kitchen table. Ari watches Zora choose between buying a MIDI controller or making rent.
      </ArticleText>
      <ArticleText>
        In Oakland, over 60% of Black renters are cost-burdened. That means they spend more than 30% of their income on rent. For many, it’s over 50%.
      </ArticleText>
      <ArticleText>
        Zora’s lease is month-to-month now. The landlord raised rent twice in the last year. She keeps her boxes stacked neatly by the door - just in case.
      </ArticleText>
      <ArticleText>
        Ari is learning that gentrification isn’t just a trend — it’s a chokehold. Once-Black neighborhoods in Oakland have seen their Black populations cut in half. Family-owned shops are replaced with boutiques. Rent climbs. Evictions increase.
      </ArticleText>
      <ArticleText>
        In Atlanta, it’s happening too — just slower. For now. Ari, now back home, learns that her mom’s lease was just renewed at $200 more a month.
      </ArticleText>
      <ArticleText>
        If Ari wants a space to create, to build, to grow — she’ll have to fight for every square foot.
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
