<script lang="ts">
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="404 — Not found" description="The requested page could not be found." robots="noindex, nofollow" />
<main class="wrap"><div class="eyebrow">404 Error</div><h1>Page not found</h1><p>Sorry, the page you're looking for doesn't exist. Let's get you back to the homepage.</p><nav><ButtonLink primary href="/">Back to Home</ButtonLink><ButtonLink href="/portfolio/">View Portfolio</ButtonLink></nav><div class="divider"></div></main>

<style>
  :global(body) { display: grid; min-height: 100vh; place-items: center; padding: 48px 18px; } .wrap { width: min(100%, 700px); padding: 32px 24px; border: 1px solid var(--border); border-radius: 12px; background: #fff; text-align: center; box-shadow: 0 10px 30px rgb(15 23 42 / 4%); } .eyebrow { margin-bottom: 12px; color: #6b7582; font: 12px Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; } h1 { margin: 0; font-size: clamp(2.1rem, 5vw, 3rem); } p { max-width: 48ch; margin: 18px auto 0; color: #6b7582; font: 15px/1.8 Inter, sans-serif; } nav { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-top: 24px; } .divider { width: min(100%, 220px); height: 1px; margin: 26px auto 0; background: var(--hr); } @media (max-width: 640px) { .wrap { padding: 24px 18px; } nav { display: grid; } }
</style>
