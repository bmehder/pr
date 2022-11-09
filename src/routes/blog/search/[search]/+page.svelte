<script lang="ts">
  import type { PageData } from './$types'

  import { page } from '$app/stores'
  import Result from './Result.svelte'

  export let data: PageData
</script>

<h1>Blog Post Results for '{$page.params.search}':</h1>
{#each data.searchResults as post}
  {#if post.subtype === 'post'}
    <Result item={post} />
  {/if}
{/each}
