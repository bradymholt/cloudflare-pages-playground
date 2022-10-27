<script>
  import logo from "./assets/cloudflare-pages.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>    
    <a href="https://pages.cloudflare.com/" target="_blank">
      <img src={logo} class="logo svelte" alt="Logo" />
    </a>
  </div>
  <h1>Cloudflare Pages Demo</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out the <a href="https://developers.cloudflare.com/pages" target="_blank">documentation</a>.    
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
