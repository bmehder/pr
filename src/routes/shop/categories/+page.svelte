<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<h1>Shop Categories</h1>
{#each data.items as item}
  <h2><a href="/shop/categories/{item}">{item}</a></h2>
{/each}
