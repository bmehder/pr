<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<h1>{data.career[0].title.rendered}</h1>
<div>{@html data.career[0].content.rendered}</div>
