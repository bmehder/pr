<script lang="ts">
  import type { PageData } from './$types'

  import Card from '$lib/Card.svelte'

  export let data: PageData
</script>

<svelte:head>
  <title>Category - {data.categoryName}</title>
</svelte:head>

<h1>Category - {data.categoryName}</h1>
<section>
  {#each data.items as item}
    <Card {item} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
</style>
