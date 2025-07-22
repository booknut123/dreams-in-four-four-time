<script>
  import { onMount } from "svelte";

  let container;
  let notes = [];

  const noteSymbols = ["♪", "♫", "♬", "♩", "♭", "♯"];
  const colors = [
    // Theme colors, also found in app.css
    "#1e1e1e",
    "#5a4e4d",
    "#726e97",
    "#d98c8c",
    "#e8d9c3",
    "#7a9376",
  ];

  function createNote() {
    // Choose left or right margin
    const isLeftSide = Math.random() < 0.5;
    const x = isLeftSide
      ? Math.random() * 5 // 0-5%
      : 94 + Math.random() * 4; // 94-98%

    return {
      id: Math.random(),
      symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      x: x,
      y: Math.random() * 100,
      size: 12 + Math.random() * 20,
      duration: 5 + Math.random() * 10, // 5-15 seconds
      delay: Math.random() * 3,
    };
  }

  onMount(() => {
    notes = Array.from({ length: 15 }, createNote);

    const interval = setInterval(() => {
      if (notes.length < 20) {
        notes = [...notes, createNote()];
      }
    }, 3000);

    // Clean up old notes
    const cleanup = setInterval(() => {
      notes = notes.slice(-30); // Keep only last 30 notes
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  });
</script>

<div class="music-notes-container" bind:this={container}>
  {#each notes as note (note.id)}
    <div
      class="note"
      style="
        left: {note.x}%;
        top: {note.y}%;
        font-size: {note.size}px;
        color: {note.color};
        animation-duration: {note.duration}s;
        animation-delay: {note.delay}s;
      "
    >
      {note.symbol}
    </div>
  {/each}
</div>

<style>
  .music-notes-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 1000;
    overflow: hidden;
  }

  .note {
    position: absolute;
    font-family: serif;
    animation: float linear infinite;
    will-change: transform;
  }

  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(5deg);
    }
    50% {
      transform: translateY(-10px) rotate(-3deg);
    }
    75% {
      transform: translateY(-30px) rotate(2deg);
    }
    100% {
      transform: translateY(-40px) rotate(0deg);
      opacity: 0;
    }
  }
</style>
