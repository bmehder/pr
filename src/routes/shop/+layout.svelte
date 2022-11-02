<script lang="ts">
  import { page } from '$app/stores'
  import { Format } from '$lib/utils'
  import { enhance } from '$app/forms'

  $: pageName = Format.toProperCase($page.routeId?.split('/').at(-1) ?? '')
  $: isDynamicRoute = pageName.includes('[')
</script>

<div class="header">
  {#if !isDynamicRoute}
    <h1>{pageName}</h1>
  {/if}
  {#if $page.routeId === '/shop'}
    <div class="search">
      <form method="POST" use:enhance action="/shop">
        <input type="text" name="searchQuery" />
        <input type="submit" value="Search" />
      </form>
    </div>
  {/if}
</div>

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
