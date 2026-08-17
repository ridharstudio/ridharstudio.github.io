<script lang="ts">
  import PageMeta from '$lib/components/PageMeta.svelte';

  const playUrl = 'https://play.google.com/store/apps/details?id=com.zikirindonesia.tv&hl=id&gl=US';
  function openPlayStore(event: MouseEvent) {
    event.preventDefault();
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (!isAndroid) { window.open(playUrl, '_blank', 'noopener,noreferrer'); return; }
    const packageName = /Chrome\//i.test(navigator.userAgent) ? 'com.android.chrome' : 'com.google.android.apps.chrome';
    const intentUrl = `intent://play.google.com/store/apps/details?id=com.zikirindonesia.tv&hl=id&gl=US#Intent;scheme=https;package=${packageName};S.browser_fallback_url=${encodeURIComponent(playUrl)};end`;
    window.location.href = intentUrl;
    window.setTimeout(() => window.open(playUrl, '_blank', 'noopener,noreferrer'), 1500);
  }
</script>

<PageMeta title="Download Zikir Indonesia TV" description="Download aplikasi Zikir Indonesia TV melalui Google Play." path="/download-zikir-indonesia-tv/" robots="noindex, nofollow" />
<main class="wrap">
  <header><div class="logo">TV</div><div><h1>Zikir Indonesia TV</h1><p>Download via Google Play</p></div></header>
  <section class="card" aria-live="polite"><p class="lead">Klik tombol di bawah untuk membuka halaman Google Play melalui browser Chrome. Ini dibuat agar user tetap masuk ke pengalaman browser dan memilih perangkat install dengan lebih jelas.</p><div class="actions"><a class="btn" href={playUrl} onclick={openPlayStore}>Buka di browser</a></div><div class="divider"></div><p class="hint">Jika tombol tidak terbuka, silakan klik lagi atau buka URL di bawah ini.</p></section>
</main>

<style>
  :global(body) { display: grid; min-height: 100vh; place-items: center; } .wrap { width: min(100% - 36px, 760px); } header { display: flex; align-items: center; gap: 18px; margin-bottom: 28px; } .logo { display: grid; width: 56px; height: 56px; place-items: center; border: 1px solid #eceff1; border-radius: 8px; background: #f7f7f8; font-size: 20px; font-weight: 700; } h1 { margin: 0; font-size: clamp(2.1rem, 5vw, 3.1rem); line-height: 1.04; } header p, .lead, .hint { color: #6b7582; font-family: Inter, sans-serif; } header p { margin: 6px 0 0; font-size: 14px; } .card { padding: 28px 24px; border: 1px solid var(--border); border-radius: 12px; box-shadow: 0 10px 30px rgb(15 23 42 / 4%); } .lead { max-width: 52ch; margin: 0; font-size: 16px; line-height: 1.8; } .actions { display: flex; justify-content: center; margin-top: 26px; } .btn { min-width: 180px; padding: 10px 14px; border-radius: 8px; background: var(--text); color: #fff; text-align: center; text-decoration: none; font: 700 13px Inter, sans-serif; box-shadow: 0 8px 16px rgb(11 15 20 / 12%); } .divider { height: 1px; margin: 28px 0; background: var(--hr); } .hint { margin: 0; text-align: center; font-size: 12px; } @media (max-width: 640px) { .card { padding: 22px 18px; } .btn { width: 100%; } }
</style>
