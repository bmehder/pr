<script lang="ts">
  import { page } from '$app/stores'
  import { Format } from '$lib/utils'
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'

  $: pageName = Format.toProperCase($page.routeId?.split('/').at(-1) ?? '')
  $: isDynamicRoute = pageName === '[id]' || pageName === '[category]'
</script>

{#if !isDynamicRoute}
  <div class="header">
    <h1>{pageName}</h1>

    <div class="search">
      <form method="POST" use:enhance action="/shop" on:submit={() => goto('/shop')}>
        <input type="text" name="searchQuery" />
        <input type="submit" value="Search" />
      </form>
    </div>
  </div>
{/if}

<slot />

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search {
    margin-top: 1.5rem;
  }
  input {
    padding: 0.5rem 1rem;
  }
  input[type='submit'] {
    background-color: var(--light);
    color: white;
    border: 2px solid var(--light);
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
    .search {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
  }
</style>
