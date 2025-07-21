<script lang="ts">
  /// <reference types="youtube" />
  let player: YT.Player;
  let audioEnabled = true; // default on
  let currentTrackTitle = "";
  let currentTrackIndex = 0;

  // Load YouTube Player API - https://developers.google.com/youtube/iframe_api_reference
  if (typeof window !== "undefined") {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player("yt-player", {
        height: "0",
        width: "0",
        playerVars: {
          listType: "playlist",
          list: "PLhUDPsGW64inBr49C0xmZ7oM3G3DeXXPQ",
          autoplay: 1, // autoplay on
          controls: 0,
        },
        events: {
          onReady: () => {
            if (audioEnabled) player.playVideo();
            updateTrackInfo();
          },
          onStateChange: () => updateTrackInfo(),
        },
      });
    };
  }

  function toggleAudio() {
    if (!player) return;
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      player.playVideo();
      updateTrackInfo();
    } else {
      player.pauseVideo();
    }
  }

  function prevTrack() {
    if (!player) return;
    player.previousVideo();
    if (!audioEnabled) {
      player.pauseVideo();
    }
    updateTrackInfo();
  }

  function nextTrack() {
    if (!player) return;
    player.nextVideo();
    if (!audioEnabled) {
      player.pauseVideo();
    }
    updateTrackInfo();
  }

  function playTrack(index) {
    if (!player) return;
    player.playVideoAt(index);
    currentTrackIndex = index;
    if (!audioEnabled) {
      audioEnabled = true;
    }
    updateTrackInfo();
  }

  function toggleTrack(index) {
    if (!player) return;
    if (currentTrackIndex === index) {
      toggleAudio();
    } else {
      playTrack(index);
    }
  }

  function updateTrackInfo() {
    if (player && player.getVideoData) {
      const data = player.getVideoData();
      currentTrackTitle = data.title || "Nothing playing currently";

      // Update current track index
      if (player.getPlaylistIndex) {
        currentTrackIndex = player.getPlaylistIndex();
      }
    }
  }

  let minimized = false;

  function toggleMinimize() {
    minimized = !minimized;
  }
</script>

<!-- Hidden YouTube iframe -->
<div id="yt-player" style="width: 0; height: 0; overflow: hidden;"></div>

<div class="audio-controls {minimized ? 'minimized' : ''}">
  <div class="button-row">
    {#if !minimized}
      <button on:click={prevTrack}>⏮️</button>
    {/if}
    <button on:click={toggleAudio}>
      {audioEnabled ? "⏸️" : "▶️"}
    </button>

    {#if !minimized}
      <button on:click={nextTrack}>⏭️</button>
    {/if}

    <button class="minimize-toggle" on:click={toggleMinimize}>
      {minimized ? "+" : "-"}
    </button>
  </div>

  {#if !minimized && currentTrackTitle}
    <p class="track-title">{currentTrackTitle}</p>
  {/if}
</div>

<style>
  .audio-controls {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #aec4ab;
    padding: 10px;
    border-radius: 10px;
    z-index: 1000;
    text-align: center;
    /* min-width: 220px; */
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-row {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .audio-controls button {
    background: none;
    border: 2px solid #5a4e4d;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  .audio-controls button:hover {
    background: #5a4e4d;
    color: white;
  }

  .track-title {
    font-size: 0.8rem;
    color: #333;
    margin: 2px;
    max-width: 100%;
    word-wrap: break-word;
  }
</style>
