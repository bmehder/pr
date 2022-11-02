<script lang="ts">
  import type { PageData, ActionData } from './$types'

  import ProductCard from './ProductCard.svelte'

  export let data: PageData
  export let form: ActionData
</script>

<div>
  {#if form}
    {#each form.items.products as product}
      <ProductCard {product} />
    {/each}
  {:else}
    {#each data.items.products as product}
      <ProductCard {product} />
    {/each}
  {/if}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-top: 1.5rem;
  }
</style>
