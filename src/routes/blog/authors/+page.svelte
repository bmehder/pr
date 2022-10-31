<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<svelte:head>
  <title>Authors</title>
</svelte:head>

<h1>Authors</h1>

{#each data.items as item}
  <h2><a href="/blog/authors/{item.slug}">{item.name}</a></h2>
{/each}
