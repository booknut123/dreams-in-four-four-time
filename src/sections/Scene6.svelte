<script>
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
  import Spacer from "../lib/Spacer.svelte";

  function updateReality() {
            const checkboxes = document.querySelectorAll('#reality-toggles input[type="checkbox"]');
            // @ts-ignore
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            const result = document.getElementById('reality-result');
            
            const messages = [
                "<em>Help Ari by selecting the supports above!</em>",
                "<em>With one support, Ari's path gets a little clearer...</em>",
                "<em>Two supports mean Ari can start building something real...</em>",
                "<em>Three supports give Ari the foundation she needs...</em>",
                "<em>Four supports mean Ari's dreams have room to grow...</em>",
                "<em>With all five supports, Ari's beats are finally loud enough to change the world. 🎵</em>"
            ];
            
            result.innerHTML = `<p>${messages[checkedCount]}</p>`;
        }
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
        <ArticleText>Sometimes I close my eyes and imagine what it would sound like if things were different.
        If my dreams had the same volume as my talent.</ArticleText>
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
        <p>What if Ari had access to:</p>
        <div id="reality-toggles">
            <label><input type="checkbox" on:change={updateReality}> A music tech class at school</label><br>
            <label><input type="checkbox" on:change={updateReality}> A mentor in the music industry</label><br>
            <label><input type="checkbox" on:change={updateReality}> Startup capital for her business</label><br>
            <label><input type="checkbox" on:change={updateReality}> Free transit to opportunities</label><br>
            <label><input type="checkbox" on:change={updateReality}> Time to create</label>
        </div>
        <div id="reality-result">
            <p><em>Help Ari by selecting the supports above!</em></p>
        </div>
    </div>
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari’s beats are already good. But imagine how loud her dreams could grow
        - if we actually invested in her, and the millions like her.
      </ArticleText>
      <ArticleText>Talent like Ari’s is everywhere -</ArticleText>
      <ArticleText>in every city, every neighborhood, every home.</ArticleText>
      <ArticleText>
        But <em>talent</em> alone isn’t enough. <em>Opportunity</em> must meet it.
      </ArticleText>
      <ArticleText>
        Want to hear Ari’s beats? Want to help the next Ari?
      </ArticleText>
      <ArticleText>
        Learn more about the realities shaping Black futures at the <strong
          ><a href="blackwealthdata.org" target="_blank"
            >Black Wealth Data Center.</a
          ></strong
        >
      </ArticleText>
      <ArticleText>Support local Black-owned businesses.</ArticleText>
      <ArticleText>
        Advocate for equitable investment in education, housing, and
        entrepreneurship.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
      Because when we invest in talent,<br />
      we don’t just change one life - <br />
      we change the soundtrack of our future.
    </p>
  </FullWidth>
</div>
