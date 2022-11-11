<script lang="ts">
  import type { PageData } from '../../../.svelte-kit/types/src/routes/blog/$types'
  import { goto } from '$app/navigation'

  import Card from '$lib/Card.svelte'

  export let data: PageData

  export let value = ''

  const handleSubmit = () => {
    value && goto(`/blog/search/${value}`)
  }
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<header>
  <h1>Blog</h1>

  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value placeholder="Enter search query..." />
    <button>Search</button>
  </form>
</header>

<section class="auto-grid">
  {#each data.posts as item}
    <Card {item} />
  {/each}
</section>

<footer>
  {#each { length: data.postsCount / 12 } as _, index}
    {#if index === 0}
      <a href="/blog">{index + 1}</a>
    {:else}
      <a href="/blog/page/{index + 1}">{index + 1}</a>
    {/if}
  {/each}
</footer>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1.5rem;
  }
  h1 {
    margin-top: 0;
  }
  input,
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  form {
    display: flex;
  }
  input {
    width: 100%;
  }
  button {
    /* background-color: var(--light); */
    /* color: white; */
    border: none;
  }
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
  footer {
    display: flex;
    gap: 0.5rem;
    margin-top: 4rem;
  }
  a {
    padding: 0.5rem 1rem;
    background-color: #eee;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }
    form {
      width: 100%;
    }
  }
</style>
