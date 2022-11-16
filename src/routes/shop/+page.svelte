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
    if (!value) return

    searchResults = null

    const res = await fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=100`
    )
    const results = await res.json()

    searchResults = results
  }

  const handleClick = () => (value = '')

  $: if (!value) searchResults = null
</script>

<header>
  <h1>Shop</h1>
  <div>
    <div>
      <input
        type="text"
        class:active={value}
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
          {#if searchResults.total === 0}
            <h3>No results</h3>
          {:else}
            <h3>{searchResults.total} results</h3>
          {/if}
          {#each searchResults.products as product}
            <MiniCard {product} />
          {/each}
        {/if}
      </aside>
    </div>
  </div>
</header>
<div class="auto-grid" class:blur={value}>
  {#each data.items.products as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    margin-block: 1.5rem;
  }
  header > div {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 50%;
  }
  input {
    position: relative;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 50%;
    border: 1px solid #ccc;
    transition: width 300ms ease-in-out;
  }
  input.active,
  input:focus {
    width: 100%;
    box-shadow: var(--shadow);
    border-radius: 0;
    outline: none;
    box-shadow: 0 0 0 0.125rem var(--light) inset;
  }
  svg {
    position: absolute;
    width: 1.5rem;
    right: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  :global(.dark) svg {
    color: initial;
  }
  svg:hover {
    color: var(--light);
  }
  header div div {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  aside {
    position: absolute;
    top: 2.5rem;
    width: 100%;
    background-color: white;
    box-shadow: var(--shadow);
    z-index: 1;
  }
  aside > :global(article:nth-child(even)) {
    background-color: #f1f1f1;
  }
  h1,
  h3 {
    margin: 0;
  }
  h3 {
    padding: 1rem;
  }
  :global(.dark) h3 {
    color: initial;
  }
  .blur {
    opacity: 0.9;
    filter: blur(10px);
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
