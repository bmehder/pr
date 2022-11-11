<script lang="ts">
  import type { PageData } from './$types'
  import Service from './Service.svelte'

  export let data: PageData
</script>

<h1>Services</h1>

<section class="auto-grid">
  {#each data.services.reverse() as service}
    <Service {service} />
  {/each}
</section>

<style>
  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
</style>
