<script lang="ts">
  import type { PageData } from './$types'

  import Card from '$lib/Card.svelte'

  export let data: PageData

  const name = data.items[0]?._embedded.author[0].name
</script>

<svelte:head>
  <title>Author - {name}</title>
</svelte:head>

<h1>By {name}</h1>
<section class="grid auto-grid">
  {#if Array.isArray(data.items)}
    {#each data.items as item}
      <Card {item} />
    {/each}
  {/if}
</section>

<style>
  section {
    margin-block: 2rem;
  }
</style>
