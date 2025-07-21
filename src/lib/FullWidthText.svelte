<script>
    let { children } = $props();
  </script>
  
  <div class="fullwidth-wrapper">
    <div class="fullwidth-box">
      {@render children()}
    </div>
  </div>
  
  <style>
    .fullwidth-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  
    .fullwidth-box {
      background-color: #e3dede;
      border: 2px solid var(--wenge);
      border-radius: 16px;
      box-shadow: 4px 4px 10px rgb(90, 78, 77);

      padding: 2rem;
      max-width: 700px;
      text-align: center;
      
      font-family: "Caveat", sans-serif;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      color: var(--wenge);
      line-height: 1.4;
    }
  </style>
