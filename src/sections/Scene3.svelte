<script>
// @ts-nocheck
  import OaklandBlackPoverty from "../lib/images/black-poverty-oakland.png"
  import OaklandDebtRatio from "../lib/images/debt-income-oakland.png"

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
      type: "pie",
      backgroundColor: "transparent",
      style: {
        fontFamily: "Space Grotesk, sans-serif",
      },
    },
    title: {
      text: "Zora’s Monthly Budget (est.)",
      align: "center",
      style: {
        color: "#5a4e4d",
        fontFamily: "DM Serif Text, serif",
        fontSize: "1.4rem",
      },
    },
    tooltip: {
      pointFormat: "<b>${point.y}</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "40%", // makes it donut-style
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.percentage:.1f}%",
        },
      },
    },
    series: [{
      name: "Expenses",
      type: "pie",
      data: [
        { name: "Rent", y: 1750, color: "#d98c8c" },
        { name: "Food", y: 380, color: "#7a9376" },
        { name: "Medical", y: 230, color: "#e8d9c3" },
        { name: "Transportation", y: 150, color: "#726e97" },
        { name: "Internet", y: 125, color: "#5a4e4d" },
        { name: "Deficit", y: 105, color: "#ff6f61" },
      ],
    }],
    credits: {
      enabled: false,
    },
    caption: {
      text: "Estimated based on MIT Living Wage Calculator & Education Data Initiative. <br /> Taxes not included.",
      style: {
        color: "#5a4e4d",
        fontSize: "0.8rem",
        paddingTop: "0.5rem",
      }
    }
  };
</script>

<Spacer height="20vh"/>

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
        Zora is 21 and lives in a one-bedroom meant to be temporary — just until she saved enough to finish her degree.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Scroller layout="left">
  {#snippet sticky()}
    <figure class="chart">
      <Chart {Highcharts} options={chartOptions} />
    </figure>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        Rent is $1,750. Her job pays $18/hr. That's $2,880 before taxes.
      </ArticleText>
      <ArticleText>
        But her bills total nearly $3,000.
        Food, transit, medical costs, loan payments — it all adds up. And then some.
        </ArticleText>
        <ArticleText>
          Zora is falling behind, $100 at a time.
      </ArticleText>
      <ArticleText>
        The city hums with opportunity - tech hubs, start-ups, studios - but for Zora, <em>budgeting isn’t about saving.</em> It’s about <em>choosing</em> which bill can wait.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<Spacer />

<Scroller layout="left">
  {#snippet sticky()}
    <figure>
      <img
        src={OaklandBlackPoverty}
        alt="Poverty rate surpasses 45% in areas of Oakland."
      />
    </figure>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        In Zora's tract, over <strong>45%</strong> of Black households are living in poverty. In Oakland, the average is <strong>21%</strong>.
      </ArticleText>
      <Spacer height="20vh"/>
    </div>
  {/snippet}
</Scroller>

<Spacer height="20vh"/>

<Scroller layout="left">
  {#snippet sticky()}
    <figure>
      <img
      src={OaklandDebtRatio}
      alt="The debt to income ratio average in Oakland is 2.15."
    />
      </figure>
  {/snippet}

  {#snippet scrolly()}
    <div class="scene-text">
      <ArticleText>
        In Alameda County, the <strong>average household owes over twice what they earn each year</strong>.
        Zora’s not just paying for today — she’s still <em>paying for yesterday</em>. She keeps her boxes stacked neatly by the door - <em>just in case</em>.
      </ArticleText>
      <ArticleText>
        Ari is learning that gentrification isn’t just a trend — it’s a chokehold.
      </ArticleText>
      <ArticleText>
        In Atlanta, it’s happening too — just slower. For now. Ari, now back home, learns that her mom’s lease was just renewed at $200 more a month.
      </ArticleText>
    </div>
  {/snippet}
</Scroller>

<div class="full-width-text">
  <FullWidth>
    <p>
        If Ari wants a space to <em>create</em>, to <em>build</em>, to <em>grow</em> — she’ll have to fight for <em>every square foot</em>.
    </p>
  </FullWidth>
</div>

<style>
  figure {
    margin-top: 2rem;
    text-align: center;
    width: 80vh;
  }
  /* figcaption {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.9rem;
    color: var(--wenge);
    margin-top: 0.75rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  } */
  img {
    width: 80vh;
  }
</style>
