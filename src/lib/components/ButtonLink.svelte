<script lang="ts">
  interface Props { href: string; primary?: boolean; external?: boolean; children?: import('svelte').Snippet; }
  let { href, primary = false, external = false, children }: Props = $props();
</script>

<a class:primary class="btn" {href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
  {@render children?.()}
</a>

<style>
  .btn { display: inline-block; padding: 8px 12px; border: 1px solid #e6e9ee; border-radius: 8px; background: #fff; color: var(--text); text-decoration: none; font: 700 13px Inter, sans-serif; }
  .primary { background: var(--text); border-color: var(--text); color: #fff; }
</style>
