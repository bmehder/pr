<script lang="ts">
  export let data
  console.log(data)
</script>

<h1>Authors</h1>

{#each data.items as item}
  <h2><a href="/authors/{item.id}">{item.name}</a></h2>
{/each}
