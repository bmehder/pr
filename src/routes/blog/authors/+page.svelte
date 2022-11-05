<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<svelte:head>
  <title>Authors</title>
</svelte:head>

<h1>Blog Authors</h1>

{#each data.items as item}
  <h2>
    <a href="/blog/authors/{item.slug}" data-sveltekit-prefetch>{item.name}</a>
  </h2>
{/each}
