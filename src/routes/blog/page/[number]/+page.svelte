<script lang="ts">
  import type { PageData } from './$types'
  import { page } from '$app/stores'

  import Card from '$lib/Card.svelte'

  export let data: PageData
</script>

<h1>Blog (page {$page.params.number})</h1>

{#key data.paginatedPosts}
  <section class="auto-grid">
    {#each data.paginatedPosts as item}
      <Card {item} />
    {:else}
      <p>No posts</p>
    {/each}
  </section>
{/key}

<div>
  {#each { length: data.postsCount / 12 } as _, index}
    {@const pageNumber = index + 1}
    {#if pageNumber === 1}
      <a href="/blog" data-sveltekit-prefetch>{pageNumber}</a>
    {:else}
      <a href="/blog/page/{pageNumber}" data-sveltekit-prefetch>{pageNumber}</a>
    {/if}
  {/each}
</div>

<style>
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
    margin-top: 4rem;
  }
  a {
    padding: 0.5rem 1rem;
    background-color: #fff;
    font-weight: bold;
  }
</style>
