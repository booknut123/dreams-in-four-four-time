<script>
  // @ts-nocheck

  // component imports
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
  import Spacer from "../lib/Spacer.svelte";
  import FullWidthText from "../lib/FullWidthText.svelte";

  // chart imports
  import { onMount } from "svelte";
  import * as Highcharts from "highcharts";
  import "highcharts/modules/exporting";
  import { Chart } from "@highcharts/svelte";

  let showChart = false;
  let chartContainer;

  // black owned businesses chart configuration
  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      style: {
        fontFamily: "Space Grotesk, sans-serif",
      },
    },
    title: {
      text: "Black-Owned Businesses: Atlanta vs National",
      align: "left",
      style: {
        color: "var(--asparagus)",
        fontFamily: "DM Serif Text",
        fontSize: "1.5rem",
      },
    },
    xAxis: {
      categories: ["2020", "2021", "2022"],
      labels: {
        style: {
          color: "var(--pomp)",
          fontSize: "1rem",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 60,
      title: {
        text: "% of Businesses",
      },
      labels: {
        format: "{value}%",
        style: {
          color: "var(--wenge)",
          fontSize: "1rem",
        },
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: "%",
    },
    plotOptions: {
      column: {
        grouping: true,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Atlanta",
        type: "column",
        color: "var(--rose)",
        data: [7.4, 8.8, 11.3],
        animation: {
          duration: 3000,
          easing: "easeOut",
        },
      },
      {
        name: "National",
        type: "column",
        color: "var(--asparagus)",
        data: [2.4, 2.7, 3.3],
        animation: {
          duration: 1500,
          easing: "easeOut",
        },
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: "var(--wenge)",
        fontWeight: "bold",
      },
    },
    caption: {
      text: "Source: LendingTree analysis of 2022 U.S. Census Bureau Annual Business Survey data.",
    },
  };

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showChart = true;
            observer.unobserve(chartContainer); // stop observing once triggered
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1, // trigger when fully visible
      }
    );
    if (chartContainer) observer.observe(chartContainer);
  });

  // interactive budget configuration
  let selectedItems = [];
  let remainingBudget = 250;

  const studioItems = [
    { name: "🔌 Audio Interface", cost: 100, essential: false },
    { name: "💻 DAW License (free)", cost: 0, essential: true },
    { name: "💻 DAW License (full features)", cost: 300, essential: false },
    { name: "📱 Domain & Hosting", cost: 60, essential: false },
    { name: "💻 Fully Working Laptop", cost: 300, essential: false },
    { name: "🎯 Marketing Tools", cost: 50, essential: false },
    { name: "🎤 Microphone", cost: 150, essential: false },
    { name: "🎹 MIDI Controller", cost: 150, essential: true },
    { name: "🎧 Studio Headphones", cost: 80, essential: true },
    { name: "🔊 Studio Monitors", cost: 180, essential: false },
  ];

  function toggleStudioItem(index) {
    const item = studioItems[index];

    if (selectedItems.includes(index)) {
      // Remove item
      selectedItems = selectedItems.filter((i) => i !== index);
      remainingBudget += item.cost;
    } else {
      // Add item if budget allows
      if (remainingBudget >= item.cost) {
        selectedItems = [...selectedItems, index];
        remainingBudget -= item.cost;
      }
    }
  }

  $: essentialItems = selectedItems.filter((i) => studioItems[i].essential);
  $: allEssentialsSelected =
    essentialItems.length ===
    studioItems.filter((item) => item.essential).length;
</script>

<Spacer />
<Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="// Track 4"
        title="Beat Store Blues"
        subtitle="&ldquo;[A] Black-owned business is 7.3 percentage points more likely than an equivalent White-owned firm to be denied financing.&rdquo;"
        source="- Barkley and Schweitzer (2023)"
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <div class="thought">
        <ArticleText>
          I even have a name picked out: <em>808 Blossom</em>. I can see it all
          - the logo, the website, the first beat that goes viral. But when I
          sit down to actually start...
        </ArticleText>
      </div>
      <ArticleText>
        Ari wants to sell beats online. She’s seen other producers on YouTube
        racking up thousands in monthly sales. She imagines uploading samples,
        branding her sound, building her empire.
      </ArticleText>
      <ArticleText>
        But when she sits down to get started, the barriers stack up fast.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Scroller layout="right">
  {#snippet sticky()}
    <div bind:this={chartContainer} style="min-height: 400px;">
      {#if showChart}
        <Chart {Highcharts} options={chartOptions} />
      {/if}
    </div>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        It costs <strong>$100</strong><sup
          ><a href="#source-7" id="ref-7">7</a></sup
        > just to register a business in Georgia.
      </ArticleText>
      <ArticleText>
        Then there’s the domain names, software licenses, marketing tools - not
        to mention gear.
      </ArticleText>
      <ArticleText>Ari thinks about applying for a loan.</ArticleText>
      <ArticleText>
        But she doesn’t have credit. Her mom doesn’t either. And rejection feels
        inevitable.
      </ArticleText>
      <ArticleText>She’s not wrong.</ArticleText>
      <ArticleText>
        A Black-owned business is over <strong>7%</strong><sup
          ><a href="#source-8" id="ref-8">8</a></sup
        > more likely to be denied financing than a comparable White-owned one.
      </ArticleText>
      <ArticleText>
        And that’s just among those who apply. Many never even try - discouraged
        by a <em>system that never loaned them much faith</em>.
      </ArticleText>
      <ArticleText>
        In Atlanta, despite being a majority Black city, only <strong
          >11.3%</strong
        ><sup><a href="#source-9" id="ref-9">9</a></sup> of businesses are Black-owned.
      </ArticleText>
      <div class="thought">
        <ArticleText>
          I'm not asking for a shortcut - just a runway. <em>Talent</em> without
          <em>capital</em>
          is like a <em>song</em> without a
          <em>speaker</em>. Who’s going to hear it?
        </ArticleText>
      </div>
    </div>
  {/snippet}
</Scroller>

<FullWidthText>
  <div class="interactive-element">
    <h3>Pack Ari's Digital Studio</h3>
    <p>
      Ari has scraped together money by tutoring younger students! Help her
      choose what she can afford with her $250 budget:
    </p>

    <div class="budget-display">
      <strong>Budget Remaining: ${remainingBudget}</strong>
    </div>

    <div class="studio-simulator">
      {#each studioItems as item, index}
        <button
          class="studio-item"
          class:selected={selectedItems.includes(index)}
          class:disabled={!selectedItems.includes(index) &&
            remainingBudget < item.cost}
          disabled={!selectedItems.includes(index) &&
            remainingBudget < item.cost}
          on:click={() => toggleStudioItem(index)}
        >
          <div>{item.name}</div>
          <div>${item.cost}</div>
          {#if item.essential}
            <div class="essential-tag">Essential</div>
          {/if}
        </button>
      {/each}
    </div>

    <div class="studio-result">
      {#if allEssentialsSelected}
        <div class="success-message">
          ✅ <strong>Bare minimum:</strong> Great! Ari can start making beats, but
          she's missing key tools for professional production.
        </div>
      {:else}
        <div class="warning-message">
          ⚠️ <strong>Missing essentials:</strong> Ari's creativity is limited without
          core equipment.
        </div>
      {/if}
    </div>
  </div>
</FullWidthText>

<style>
  .interactive-element {
    border: none;
    box-shadow: none;
  }

  .interactive-element p,
  .studio-result {
    line-height: 1.6;
  }

  .budget-display {
    background: var(--bone);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 215, 0, 0.3);
    text-align: center;
  }

  .studio-simulator {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .studio-item {
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    font-family: inherit;
  }

  .studio-item:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .studio-item.selected {
    background: rgba(255, 215, 0, 0.1);
  }

  .studio-item:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .essential-tag {
    font-size: 0.7rem;
    margin-top: 5px;
  }

  .success-message {
    padding: 15px;
    background: rgba(74, 222, 128, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(74, 222, 128, 0.3);
  }

  .warning-message {
    padding: 15px;
    background: rgba(251, 191, 36, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(251, 191, 36, 0.3);
  }
</style>
