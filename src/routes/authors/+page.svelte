<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>Authors</title>
</svelte:head>

<h1>Authors</h1>

{#each data.items as item}
  <h2><a href="/authors/{item.slug}">{item.name}</a></h2>
{/each}
