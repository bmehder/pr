<script lang="ts">
  export let data
</script>

<h1>Categories</h1>
{#each data.items as item}
  <h2><a href="/categories/{item.id}">{item.name}</a></h2>
{/each}
