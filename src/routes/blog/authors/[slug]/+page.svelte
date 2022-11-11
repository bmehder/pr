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
<section class="auto-grid">
  {#if Array.isArray(data.items)}
    {#each data.items as item}
      <Card {item} />
    {/each}
  {/if}
</section>

<style>
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
</style>
