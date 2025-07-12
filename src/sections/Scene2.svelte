<script>
  // @ts-nocheck

  import AtlHome from "../lib/images/black-home-atl.png";
  import AtlNorthEdu from "../lib/images/white-edu-atl.png";
  import AtlEdu from "../lib/images/all-edu-atl.png";

  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Heading from "../lib/Heading.svelte";
  import Spacer from "../lib/Spacer.svelte";

  import * as Highcharts from "highcharts";
  import "highcharts/modules/exporting";
  import { Chart } from "@highcharts/svelte";

  const chartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
      style: {
        fontFamily: "Space Grotesk",
      },
    },
    title: {
      text: "Academic Performance Comparison",
      align: "left",
      style: {
        color: "var(--asparagus)",
        fontFamily: "DM Serif Text",
        fontSize: "1.5rem",
      },
    },
    xAxis: {
      categories: ["Math Proficiency", "Reading Proficiency"],
      labels: {
        style: {
          color: "var(--pomp)",
          fontSize: "1rem",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Percent Proficient",
        style: {
          color: "var(--wenge)",
          fontSize: "1rem",
        },
      },
      labels: {
        format: "{value}%",
        style: {
          color: "var(--wenge)",
        },
      },
    },
    tooltip: {
      valueSuffix: "%",
      backgroundColor: "#f5f5f5",
      style: {
        color: "#1e1e1e",
      },
    },
    legend: {
      itemStyle: {
        color: "var(--black)",
        fontWeight: "bold",
      },
    },
    series: [
      {
        type: "bar",
        name: "Therrell High",
        color: "#d98c8c", // rose
        data: [7, 18],
      },
      {
        type: "bar",
        name: "Walton High",
        color: "#7a9376", // asparagus
        data: [85, 88],
      },
    ],
    credits: {
      enabled: false,
    },
    caption: {
      text: "Public data from GreatSchools.org and Niche.com.<br /> Therrell and Walton High are public high schools in the Atlanta metro area.",
      style: {
        color: "#5a4e4d",
        fontSize: "0.8rem",
        paddingTop: "0.5rem",
      }
    }
  };
</script>

<Spacer />

<Heading
  scene="Scene 2"
  title="Learning in the Margins"
  subtitle=' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." '
/>

<Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <figure>
      <Chart {Highcharts} options={chartOptions} />
    </figure>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Ari is bright. She scores high on every test she takes — the few her
        overworked teachers still have time to give.
      </ArticleText>
      <ArticleText>
        But at her school, fewer than <strong>1 in 5</strong> are meeting proficiency in
        reading. Only <strong>7%</strong> are proficient in math.
      </ArticleText>
      <ArticleText>
        There's <strong>one</strong> counselor for over <strong>250</strong> students
        - often just one per grade.
      </ArticleText>
      <ArticleText>
        The school has a band, but no program for digital music production - the
        kind Ari dreams of. The nearest class like that? A 40-minute bus ride
        and a transfer away. There’s no one to help her craft a college plan —
        no one to even ask if she’s considered one.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Spacer />

<Scroller layout="right">
  {#snippet sticky()}
    <figure>
      <img
        src={AtlEdu}
        alt="Bachelor degree attainment falls under 15% in areas of Southern Atlanta."
      />
      <figcaption>
        In some tracts of Southern Atlanta with a high concentration of Black residents, only
        14.2% hold a bachelor’s degree.
      </figcaption>
    </figure>
    <figure>
      <img
        src={AtlNorthEdu}
        alt="Bachelor degree attainment for white people surpasses 80.6% in wealthy areas of Northern Atlanta."
      />
      <figcaption>
        In Northern Atlanta, over 80% of white adults hold a bachelor’s degree.
      </figcaption>
    </figure>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        In Ari's district in Atlanta, which is <strong>98.9% black</strong>, less than <strong>1 in 6</strong>
        have a college degree. Compare that to over 85% of White adults in
        wealthier areas of the same city.
      </ArticleText>
      <ArticleText>
        It’s not about ability — it’s about access. It’s about schools being
        funded by property taxes. It’s about <em>zip codes</em> acting like <em>invisible
        gates.</em>
      </ArticleText>
      <ArticleText>
        Ari studies at night while her mom works the late shift. She watches
        YouTube videos, eager to experiment. She learns how to mix from Reddit
        threads. But all of this — this hustle, this reach — is her making up
        for a <em>system that should have met her halfway.</em>
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<style>
  figure {
    margin-top: 2rem;
    text-align: center;
  }
  figcaption {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.9rem;
    color: var(--wenge);
    margin-top: 0.75rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    width: 48vh;
  }
</style>
