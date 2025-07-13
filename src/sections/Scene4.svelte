<script>
  // @ts-nocheck

  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import FullWidth from "../lib/FullWidthText.svelte";
  import Spacer from "../lib/Spacer.svelte";

  import * as Highcharts from "highcharts";
  import "highcharts/modules/exporting";
  import { Chart } from "@highcharts/svelte";

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
      align: "center",
      style: {
        color: "var(--pomp)",
        fontFamily: "DM Serif Text, serif",
        fontSize: "1.4rem",
      },
    },
    xAxis: {
      categories: ["2020", "2021", "2022"],
      labels: {
        style: {
          color: "var(--wenge)",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "% of Businesses",
      },
      labels: {
        format: "{value}%",
        style: {
          color: "var(--wenge)",
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
      },
      {
        name: "National",
        type: "column",
        color: "var(--asparagus)",
        data: [2.4, 2.7, 3.3],
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: "var(--black)",
      },
    },
    caption: {
      text:  "Source: LendingTree analysis of 2022 U.S. Census Bureau Annual Business Survey data.",
      style: {
        color: "#5a4e4d",
        fontSize: "0.8rem",
        paddingTop: "0.5rem",
      },
    }
  };
</script>

<Spacer />
<Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <ArticleText>
      <Heading
        scene="Scene 4"
        title="A Beat Store of Her Own"
        subtitle="&ldquo;[A] Black-owned business is 7.3 percentage points more likely than an equivalent White-owned firm to be denied financing.&rdquo;"
        source="- Barkley and Schweitzer (2023)"
      />
    </ArticleText>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari wants to sell beats online. She’s seen other producers on YouTube
        racking up thousands in monthly sales. She imagines uploading samples,
        branding her sound, building her empire.
      </ArticleText>
      <ArticleText
        >She even has a name picked out: <em>808 Blossom</em>.</ArticleText
      >
      <ArticleText>
        But when she sits down to get started, the barriers stack up fast.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Scroller layout="right">
  {#snippet sticky()}
    <div class="chart-container">
      <Chart {Highcharts} options={chartOptions} />
    </div>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        It costs <strong>$100</strong><sup><a href="#source-7" id="ref-7">7</a></sup> just to register a business in Georgia.
      </ArticleText>
      <ArticleText>
        Then there’s the domain names, software licenses, marketing tools — not
        to mention gear.
      </ArticleText>
      <ArticleText>Ari thinks about applying for a loan.</ArticleText>
      <ArticleText>
        But she doesn’t have credit. Her mom doesn’t either. And rejection feels
        inevitable.
      </ArticleText>
      <ArticleText>She’s not wrong.</ArticleText>
      <ArticleText>
        A Black-owned business is over <strong>7%</strong><sup><a href="#source-8" id="ref-8">8</a></sup> more likely to be denied
        financing than a comparable White-owned one.
      </ArticleText>
      <ArticleText>
        And that’s just among those who apply. Many never even try — discouraged
        by a <em>system that never loaned them much faith</em>.
      </ArticleText>
      <ArticleText>
        In Atlanta, despite being a majority Black city, only <strong>11.3%</strong><sup><a href="#source-9" id="ref-9">9</a></sup> of businesses are Black-owned.
      </ArticleText>
      <ArticleText>
        Ari’s not asking for a shortcut — just a runway.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
      <em>Talent</em> without <em>capital</em> is like a <em>song</em> without a
      <em>speaker</em>. Who’s going to hear it?
    </p>
  </FullWidth>
</div>

<style>
  .full-width-text {
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  .chart-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 1rem;
  }

  .caption {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.9rem;
    color: var(--wenge);
    margin-top: 0.5rem;
  }
</style>
