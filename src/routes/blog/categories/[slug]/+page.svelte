<script lang="ts">
  import type { PageData } from './$types'

  import Card from '$lib/Card.svelte'

  export let data: PageData
</script>

<svelte:head>
  <title>Category - {data.categoryName}</title>
</svelte:head>

<h1>Category - {data.categoryName}</h1>
<section class="grid auto-grid">
  {#each data.items as item}
    <Card {item} />
  {/each}
</section>

<style>
  section {
    margin-block: 2rem;
  }
</style>
