<script lang="ts">
  interface Props {
    title: string;
    description: string;
    path?: string;
    robots?: string;
    type?: string;
  }

  let { title, description, path = '/', robots = 'index, follow', type = 'website' }: Props = $props();
  const siteName = 'Ridhar Studio';
  const siteUrl = 'https://ridharstudio.github.io';
  const url = $derived(`${siteUrl}${path}`);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="robots" content={robots} />
  <meta name="author" content="Ridhar Ramadhansyah" />
  <link rel="canonical" href={url} />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:image" content={`${siteUrl}/og-image.svg`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />
</svelte:head>
