<script lang="ts">
  import Card from '../../blog/Card.svelte'

  export let data
</script>

<h1>{data.items[0]._embedded['wp:term'][0][0].name}</h1>
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
