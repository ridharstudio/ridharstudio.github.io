<script lang="ts">
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="Ridhar Studio — ridhar()" description="Ridhar Studio — software, design, and digital products." />

<main class="wrap">
  <header>
    <div class="logo">RS</div>
    <div><h1>Ridhar Studio</h1><p class="subtitle">Software · Design · Product</p></div>
  </header>

  <article>
    <p class="lead">Ridhar Studio is a solo creative agency run by an experienced creative software engineer — focused on software application development. We deliver products that go from idea to production-ready app, and real world impact.</p>
    <div class="actions">
      <ButtonLink primary href="mailto:ridhar.studio@gmail.com">Start a Project</ButtonLink>
      <ButtonLink href="/portfolio/">View Portfolio</ButtonLink>
      <ButtonLink href="/developer/">Meet the Developer</ButtonLink>
    </div>
    <div class="divider"></div>
    <h2>Mission</h2>
    <p>Ridhar Studio is committed to efficiency and clear user experience. We build products that are simple and pleasant to use — solving real-world problems with creative ways.</p>
    <h2>Services</h2>
    <div class="services">
      <div>• Web Development — SPA, SSR, static sites, API</div><div>• Design & Branding — UI/UX, design systems, prototyping</div><div>• Mobile app — Android apps</div><div>• Consulting — architecture, audit, delivery strategy</div>
    </div>
    <div class="divider"></div>
    <h2>Portfolio & Products</h2>
    <p>Some products and apps have been released on the Play Store: <a href="https://play.google.com/store/apps/developer?id=Ridhar+Studio&hl=vi" target="_blank" rel="noopener noreferrer">Ridhar Studio on Google Play</a>. See the Portfolio page for direct links to our apps.</p>
    <div class="divider"></div>
    <div class="actions"><ButtonLink primary href="mailto:ridhar.studio@gmail.com">Contact</ButtonLink><ButtonLink href="/portfolio/">Portfolio</ButtonLink><ButtonLink href="/developer/">Developer</ButtonLink></div>
  </article>
  <footer>© Ridhar Studio</footer>
</main>

<style>
  .wrap { width: 100%; max-width: 880px; margin: 0 auto; padding: 48px 18px; }
  header { display: flex; align-items: center; gap: 18px; margin-bottom: 28px; }
  .logo { display: grid; width: 56px; height: 56px; place-items: center; border: 1px solid #eceff1; border-radius: 8px; background: #f7f7f8; font-size: 20px; font-weight: 700; }
  h1 { margin: 0; font-size: 44px; line-height: 1.04; letter-spacing: -.01em; }
  .subtitle { margin: 6px 0 0; color: var(--muted); font: 15px Inter, sans-serif; }
  article { font-size: 18px; line-height: 1.9; }
  article p { margin: 0 0 18px; } h2 { margin: 36px 0 12px; font-size: 22px; } a { color: var(--text); }
  .lead, .services { color: var(--muted); } .lead { font-size: 17px; } .services { display: grid; gap: 8px; font-size: 15px; }
  .actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; } .divider { height: 1px; margin: 28px 0; background: var(--hr); } footer { margin-top: 40px; color: var(--muted); font-size: 14px; }
  @media (max-width: 720px) { h1 { font-size: 34px; } article { font-size: 16px; line-height: 1.8; } }
</style>
