<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const category = data.career[0]['career-cats']
  const catName = data.careerCats.find(
    (cat: { id: number }) => cat.id === category[0]
  )
</script>

<h1>{data.career[0].title.rendered} ({catName.name})</h1>
<div>{@html data.career[0].content.rendered}</div>
