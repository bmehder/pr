<script lang="ts">
  import type { PageData } from './$types'

  import Faq from './Faq.svelte'

  export let data: PageData

  export const prerender = true
</script>

<div>
  {#each data.sortedFaqs as category}
    <h2>{category.name}</h2>
    {#each category.faqs as faq}
      <Faq {faq} --color="black" --background="#f1f1f1" />
    {/each}
  {/each}
</div>
