<script lang="ts">
  import type { PageData } from './$types'

  import ProductCard from './ProductCard.svelte'

  export let data: PageData
</script>

<h1>Products</h1>
<div>
  {#each data.items.products as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    gap: 3rem;
    margin-top: 1.5rem;
  }
</style>
