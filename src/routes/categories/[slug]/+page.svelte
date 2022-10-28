<script lang="ts">
  import Card from '$lib/Card.svelte'

  export let data

  const name = data.items[0]._embedded['wp:term'][0][0].name
</script>

<svelte:head>
  <title>Categories - {name}</title>
</svelte:head>

<h1>{name}</h1>
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
