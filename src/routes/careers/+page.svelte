<script lang="ts">
  import type { PageData } from './$types'

  import Career from './Career.svelte'
  export let data: PageData
</script>

<h1>Careers</h1>

<div class="grid">
  {#each data.careers as career}
    <Career {career} cats={data.careerCats} />
  {/each}
</div>

<style>
  div {
    margin-block: 1.5rem;
  }
</style>
