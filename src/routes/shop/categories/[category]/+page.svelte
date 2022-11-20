<script lang="ts">
  import type { PageData } from './$types'
  import ProductCard from '../../ProductCard.svelte'
  import { Format } from '$lib/utils'

  export let data: PageData

  const categoryName = Format.toProperCase(data.items.products[0].category)
</script>

<h1>{categoryName}</h1>
<div class="grid auto-grid">
  {#each data.items.products as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  div {
    margin-top: 1.5rem;
  }
</style>
