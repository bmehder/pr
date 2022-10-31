<script lang="ts">
  import type { PageData } from './$types'
  import ProductCard from '../../ProductCard.svelte'

  export let data: PageData

  const toProperCase = (str: string) => str[0].toUpperCase() + str.slice(1)
  const categoryName = toProperCase(data.items.products[0].category)

  console.log(data)
</script>

<h1>{categoryName}</h1>
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
