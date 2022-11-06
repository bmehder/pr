<script lang="ts">
  import type { PageData } from './$types'
  import { page } from '$app/stores'

  import Card from '$lib/Card.svelte'

  export let data: PageData
</script>

<h1>Blog (page {$page.params.number})</h1>

{#key data.paginatedPosts}
  <section>
    {#each data.paginatedPosts as item}
      <Card {item} />
    {:else}
      <p>No posts</p>
    {/each}
  </section>
{/key}

<div>
  {#each { length: data.postsCount / 12 } as _, index}
    {#if index === 0}
      <a href="/blog">{index + 1}</a>
    {:else}
      <a href="/blog/page/{index + 1}">{index + 1}</a>
    {/if}
  {/each}
</div>

<style>
  section {
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
    background-color: #eee;
    font-weight: bold;
  }
</style>
