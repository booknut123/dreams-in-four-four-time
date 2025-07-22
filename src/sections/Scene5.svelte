<script>
  // component imports
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
  import Spacer from "../lib/Spacer.svelte";

  // wealth interactive configuration
  let guess = "";
  let showResult = false;
  let guessNumber = 0;
  let userGuessed = false;

  function revealWealth() {
    if (guess) {
      showResult = true;
      userGuessed = true;
      guessNumber = parseInt(guess);
    }
  }

  function resetGuess() {
    guess = "";
    showResult = false;
    guessNumber = 0;
    userGuessed = false;
  }

  $: numericGuess = Number(guess);
</script>

<Spacer />
<Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="// Track 5"
        title="Same Stories, Different Cities (Remix)"
        subtitle="&ldquo;Unless net worth outcomes in communities of color improve, the aggregate magnitude of the wealth disparity will increase.&rdquo;"
        source="- Duke University and The New School (2015)"
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        You'd think things would change across state lines. But Oakland's
        numbers mirror Atlanta's.
      </ArticleText>
      <ArticleText>In Boston, the contrast is even starker.</ArticleText>

      <!-- wealth interactive UI -->
      <ArticleText>
        <div class="interactive-element">
          <h3>Guess the Wealth Gap</h3>
          <p>
            A 2015 Boston Federal Reserve Bank study found that the median net
            worth of White households is $250,000.
          </p>
          <p>
            <strong
              >What do you think the median net worth is for Black households in
              Boston?</strong
            >
          </p>
          <div class="guess-input">
            <input
              type="number"
              bind:value={guess}
              placeholder="Enter amount"
              disabled={showResult}
            />

            {#if !showResult}
              <div class="button-row">
                <button on:click={revealWealth} disabled={!guess || (numericGuess < 0)}>
                  Submit Guess
                </button>

                <button
                  on:click={() => {
                    showResult = true;
                    userGuessed = false;
                  }}>I’d Rather Not Guess</button
                >
              </div>
            {:else}
              <button on:click={resetGuess} style="font-size: 1.1rem">⟳</button>
            {/if}
          </div>

          {#if showResult}
            <div class="wealth-result">
              <div
                style="margin-top: 20px; padding: 20px; border-radius: 10px;"
              >
                {#if userGuessed}
                  <p>
                    <strong>Your guess:</strong> ${guessNumber.toLocaleString()}
                  </p>
                {:else}
                  <p>You chose not to guess. Totally fair.</p>
                {/if}
                <p>
                  <strong>Actual median net worth for Black households:</strong>
                  <span style="font-size: 1.5rem;">$8</span>
                </p>
                <p style="margin-top: 10px; opacity: 0.9;">
                  Not $800. Not $80. Eight dollars.
                </p>
                <p style="margin-top: 10px; opacity: 0.9;">
                  (Yes, actually eight dollars. You can read more here: <a
                    href="https://www.bostonfed.org/publications/one-time-pubs/color-of-wealth.aspx"
                    target="_blank"
                    >https://www.bostonfed.org/publications/one-time-pubs/color-of-wealth.aspx</a
                  >)
                </p>
              </div>
            </div>
          {/if}
        </div>
      </ArticleText>
      <!-- End interactive UI -->

      <div class="thought">
        <ArticleText>
          This isn't about effort. I work hard. Mom works hard. Zora works hard.
          This is about structures - about decades of underinvestment.
        </ArticleText>
      </div>
    </div>
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
  .guess-input {
    margin: 20px 0;
  }

  .guess-input input {
    background: white;
    border: 1px solid var(--black);
    padding: 10px 15px;
    border-radius: 5px;
    font-family: inherit;
  }

  .guess-input input:disabled {
    background: #f5f5f5;
    color: #666;
  }

  .guess-input button {
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .guess-input button:hover {
    transform: translateY(-2px);
  }

  .guess-input button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .wealth-result {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .button-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
  }

  .button-row button {
    flex: 1;
    background: var(--rose, #ff5f56);
    color: white;
  }
</style>
