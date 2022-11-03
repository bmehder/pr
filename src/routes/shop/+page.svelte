<script lang="ts">
  import type { PageData } from './$types'

  import ProductCard from './ProductCard.svelte'

  type Products = {
    products?: []
  }
  export let data: PageData

  let value = ''
  let searchResults: Products | null

  const getSearchResults = async (value: string) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${value}`)
    const results = await res.json()

    searchResults = results
  }

  const clearSearch = () => {
    value = ''
    searchResults = null
  }
</script>

<header class="search">
  <h1>Shop</h1>
  <div>
    <div>
      <input type="text" bind:value />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5"
        on:click={clearSearch}
        on:keypress
      >
        <path
          d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        />
      </svg>
    </div>
    <button on:click={() => getSearchResults(value)} on:keypress>Search</button>
  </div>
</header>
<div class="content">
  {#if searchResults?.products}
    {#each searchResults.products as product}
      <ProductCard {product} />
    {:else}
      <p>No results</p>
    {/each}
  {:else}
    {#each data.items.products as product}
      <ProductCard {product} />
    {/each}
  {/if}
</div>

<style>
  header,
  header > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 0.5rem;
  }
  input,
  button {
    padding: 0.5rem 1rem;
  }
  header div div {
    position: relative;
  }
  svg {
    position: absolute;
    top: 50%;
    right: 0.25rem;
    width: 1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
  button {
    background-color: var(--light);
    color: white;
    border: 2px solid var(--light);
    cursor: pointer;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-top: 1.5rem;
  }
</style>
