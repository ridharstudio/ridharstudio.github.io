<script lang="ts">
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="Developer — Ridhar Studio" description="Ridhar Ramadhansyah — Founder and Lead Developer at Ridhar Studio." path="/developer/" type="profile" />
<main class="wrap">
  <header><h1>Ridhar Ramadhansyah</h1><p>Founder & Lead Developer — Ridhar Studio.</p></header>
  <section><p>Experienced across the software industry and startups — led trusted teams, worked end-to-end from QA to infrastructure, and trained as a PM. Many of my apps started as personal problems that turned out to help thousands of people.</p><p>Have a problem you want solved? <a href="mailto:ridhar.studio@gmail.com">Let's talk</a>.</p><div class="links"><div>LinkedIn: <a href="https://id.linkedin.com/in/ridharamadhansyah" target="_blank" rel="noopener noreferrer">/in/ridharamadhansyah</a></div><div>Email: <a href="mailto:ridhar.studio@gmail.com">ridhar.studio@gmail.com</a></div></div></section>
  <div class="divider"></div><nav class="actions"><ButtonLink href="/">Home</ButtonLink><ButtonLink href="/portfolio/">Portfolio</ButtonLink><ButtonLink primary href="mailto:ridhar.studio@gmail.com">Start a Project</ButtonLink></nav><footer>© Ridhar Studio</footer>
</main>

<style>
  .wrap { max-width: 720px; margin: 0 auto; padding: 36px 18px; } header { margin-bottom: 18px; } h1 { margin: 0; font-size: 28px; } header p { margin-top: 10px; color: var(--muted); } a { color: var(--text); font-weight: 700; text-decoration: none; } .links { margin-top: 14px; } .divider { height: 1px; margin: 28px 0; background: var(--hr); } .actions { display: flex; flex-wrap: wrap; gap: 10px; } footer { margin-top: 28px; color: var(--muted); }
</style>
