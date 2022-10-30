<script>
  import ProductCard from './ProductCard.svelte'

  export let data
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
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    gap: 3rem;
    margin-top: 1.5rem;
  }
</style>
