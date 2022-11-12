<script lang="ts">
  import type { PageData } from './$types'

  import ProductCard from './ProductCard.svelte'
  import MiniCard from './MiniCard.svelte'

  type Products = {
    products?: []
    total: number
  }
  export let data: PageData

  let value = ''
  let searchResults: Products | null

  const getSearchResults = async (value: string) => {
    if (value.length < 2) return
    searchResults = null

    const res = await fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=100`
    )
    const results = await res.json()

    searchResults = results
  }

  $: if (value.length < 2) searchResults = null
</script>

<header class="search">
  <h1>Shop</h1>
  <div>
    <div>
      <input
        type="text"
        bind:value
        placeholder="Search..."
        on:input={() => getSearchResults(value)}
      />
      <aside>
        {#if searchResults?.products}
          {#each searchResults.products as product}
            <MiniCard {product} />
          {:else}
            <p>No results</p>
          {/each}
        {/if}
      </aside>
    </div>
  </div>
</header>
<div class="auto-grid">
  {#each data.items.products as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }
  header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 100%;
  }
  header div div {
    position: relative;
    width: 300px;
  }
  aside {
    position: absolute;
    width: 100%;
    box-shadow: var(--shadow);
  }
  aside > :global(article:nth-child(even)) {
    background-color: #f1f1f1;
  }
  h1 {
    margin: 0;
  }
  p {
    padding: 1rem;
    background-color: white;
  }
  @media screen and (max-width: 769px) {
    header {
      flex-direction: column;
    }
    header div div,
    input {
      width: 100%;
    }
  }
</style>
