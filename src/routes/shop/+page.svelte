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

  const handleClick = () => (value = '')

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5"
        on:click={handleClick}
        on:keypress
      >
        <path
          d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        />
      </svg>

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
<div class="auto-grid" class:blur={value.length > 1}>
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
    position: relative;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 100%;
  }
  svg {
    position: absolute;
    width: 1.5rem;
    right: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  svg:hover {
    color: var(--light);
  }
  header div div {
    position: relative;
    width: 300px;
  }
  aside {
    position: absolute;
    width: 100%;
    box-shadow: var(--shadow);
    z-index: 1;
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
  .blur {
    filter: blur(2px);
    transition: all 100ms ease;
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
