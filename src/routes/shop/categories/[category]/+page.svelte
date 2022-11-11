<script lang="ts">
  import type { PageData } from './$types'
  import ProductCard from '../../ProductCard.svelte'
  import { Format } from '$lib/utils'

  export let data: PageData

  const categoryName = Format.toProperCase(data.items.products[0].category)
</script>

<h1>{categoryName}</h1>
<div class="auto-grid">
  {#each data.items.products as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    gap: 3rem;
    margin-top: 1.5rem;
  }
</style>
