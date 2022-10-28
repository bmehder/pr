<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<h1>Categories</h1>
{#each data.items as item}
  <h2><a href="/categories/{item.slug}">{item.name}</a></h2>
{/each}
