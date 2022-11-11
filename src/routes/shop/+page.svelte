<script lang="ts">
  import type { PageData } from './$types'

  import ProductCard from './ProductCard.svelte'

  type Products = {
    products?: []
    total: number
  }
  export let data: PageData

  let value = ''
  let searchQuery = ''
  let searchResults: Products | null

  const getSearchResults = async (value: string) => {
    searchResults = null

    searchQuery = value
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=100`
    )
    const results = await res.json()

    searchResults = results
  }

  const clearSearch = () => {
    value = ''
    searchResults = null
  }

  const handleKeypress = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      getSearchResults(value)
    }
  }
  $: !value && (searchResults = null)
</script>

<header class="search">
  {#if searchResults && value}
    <h1>
      {searchResults.total} search results for '{searchQuery}'
      <span on:click={clearSearch} on:keypress>Clear Search</span>
    </h1>
  {:else}
    <h1>Shop</h1>
  {/if}
  <div>
    <div>
      <input type="text" bind:value on:keypress={handleKeypress} />
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
<div class="auto-grid">
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
  input,
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
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
  h1 {
    margin: 0;
  }
  h1 span {
    font-size: 1rem;
    font-weight: normal;
    color: var(--light);
    text-decoration: underline;
    cursor: pointer;
  }
  h1 span:hover {
    text-decoration: none;
  }
  /* .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-top: 1.5rem;
  } */
  @media screen and (max-width: 720px) {
    header {
      flex-direction: column;
    }
    header div div,
    input {
      width: 100%;
    }
  }
</style>
