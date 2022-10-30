<script lang="ts">
  import type { PageData } from './$types'

  import Card from '$lib/Card.svelte'

  export let data: PageData

  const name = data.items[0]._embedded['wp:term'][0][0].name

  console.log(data)
</script>

<svelte:head>
  <title>Categories - {name}</title>
</svelte:head>

<h1>Todo: Get dynamic category name</h1>
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
