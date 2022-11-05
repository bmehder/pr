<script lang="ts">
  import type { PageData } from './$types'
  import { Format } from '$lib/utils'

  export let data: PageData
  let value = 'Default'

  $: categories = value === 'Alphabetical' ? [...data.items].sort() : data.items
</script>

<div class="heading">
  <h1>Shop Categories</h1>
  <label for="sort"
    >Sort by:
    <select name="sort" bind:value>
      <option>Default</option>
      <option>Alphabetical</option>
    </select>
  </label>
</div>
<div>
  {#each categories as item}
    <h2><a href="/shop/categories/{item}">{Format.toProperCase(item)}</a></h2>
  {/each}
</div>

<style>
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }
  h1 {
    margin: 0;
  }
  select {
    padding: 0.5rem;
    background-color: #f1f1f1;
    border-radius: 0.25rem;
    outline: none;
  }
  @media screen and (max-width: 720px) {
    .heading {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    select,
    label {
      width: 100%;
    }
    select {
      margin-top: 0.5rem;
    }
  }
</style>
