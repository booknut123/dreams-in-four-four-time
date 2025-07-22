<script>
  import Audio from "./lib/Audio.svelte";
  // import MusicNote from "./lib/MusicNote.svelte";
  import Intro from "./sections/Intro.svelte";
  import Scene1 from "./sections/Scene1.svelte"
  import Scene2 from "./sections/Scene2.svelte";
  import Scene3 from "./sections/Scene3.svelte";
  import Scene4 from "./sections/Scene4.svelte";
  import Scene5 from "./sections/Scene5.svelte";
  import Scene6 from "./sections/Scene6.svelte";
  import Outro from "./sections/Outro.svelte";
  import Footer from "./sections/Footer.svelte";
  
</script>

<svelte:head>
  <title>Dreams in Four-Four Time</title>
  <link rel="stylesheet" href="styles.css" />
</svelte:head>

<main>
  <Audio />
  <!-- <MusicNote /> -->
  <Intro />
  <Scene1 />
  <Scene2 />
  <Scene3 />
  <Scene4 />
  <Scene5 />
  <Scene6 />
  <Outro />
  <Footer />
</main>
