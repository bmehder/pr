<script lang="ts">
  import Card from '../../blog/Card.svelte'

  export let data

  $: console.log(data)
</script>

<h1>{data.items[0]?._embedded.author[0].name}</h1>
<section>
  {#if Array.isArray(data.items)}
    {#each data.items as item}
      <Card {item} />
    {/each}
  {/if}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
</style>
