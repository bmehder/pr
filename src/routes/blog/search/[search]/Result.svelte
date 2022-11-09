<script lang="ts">
  export let item: { url: string; title: string }

  const url: string = item.url.split('/').at(-2) ?? ''
  const title: string = item.title
</script>

<h2>
  <a href="/blog/{url}" data-sveltekit-prefetch>{@html title}</a>
</h2>
