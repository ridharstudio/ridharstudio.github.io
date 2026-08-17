<script lang="ts">
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import PageMeta from '$lib/components/PageMeta.svelte';
  import { projects } from '$lib/data/projects';
</script>

<PageMeta title="Portfolio — Ridhar Studio" description="Portfolio of apps developed by Ridhar Studio, including Zikir Indonesia and Zikir Indonesia TV." path="/portfolio/" />
<main class="wrap">
  <header><h1>Portfolio</h1><p>Apps developed by Ridhar Studio, available on Google Play.</p></header>
  <section class="list">
    {#each projects as project}
      <article class="app"><h2>{project.name} {#if project.newest}<span>Newest</span>{/if}</h2><p>{project.description}</p><div class="actions"><ButtonLink href={project.url} external>View on Play Store</ButtonLink></div></article>
    {/each}
  </section>
  <div class="divider"></div>
  <nav class="actions"><ButtonLink href="/">Home</ButtonLink><ButtonLink href="mailto:ridhar.studio@gmail.com">Contact</ButtonLink><ButtonLink href="/developer/">Developer</ButtonLink></nav>
  <footer>© Ridhar Studio</footer>
</main>

<style>
  .wrap { max-width: 880px; margin: 0 auto; padding: 36px 18px; } h1 { margin: 0; font-size: 34px; } header p, .app p, footer { color: var(--muted); } header p { margin-top: 6px; } .list { display: grid; gap: 18px; margin-top: 22px; } .app { padding: 18px; border: 1px solid #f0f2f4; border-radius: 8px; } h2 { margin: 0 0 6px; font-size: 18px; } .app p { margin: 0; } span { display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 999px; background: var(--text); color: #fff; font-size: 11px; vertical-align: middle; } .actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; } .divider { height: 1px; margin: 28px 0; background: var(--hr); } footer { margin-top: 28px; }
</style>
