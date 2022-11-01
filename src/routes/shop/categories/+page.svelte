<script lang="ts">
  import type { PageData } from './$types'
  import { Format } from '$lib/utils'

  export let data: PageData
</script>

{#each data.items as item}
  <h2><a href="/shop/categories/{item}">{Format.toProperCase(item)}</a></h2>
{/each}
