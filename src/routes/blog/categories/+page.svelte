<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<h1>Blog Categories</h1>
{#each data.posts as item}
  <h2>
    <a href="/blog/categories/{item.slug}" data-sveltekit-prefetch>{item.name}</a>
  </h2>
{/each}
