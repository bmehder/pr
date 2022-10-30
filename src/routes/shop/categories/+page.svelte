<script lang="ts">
  export let data
</script>

<h1>Shop Categories</h1>
{#each data.items as item}
  <h2><a href="/shop/categories/{item}">{item}</a></h2>
{/each}
