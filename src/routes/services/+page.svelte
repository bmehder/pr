<script lang="ts">
  import type { PageData } from './$types'
  import Service from './Service.svelte'

  export let data: PageData
</script>

<h1>Services</h1>

<section class="grid auto-grid">
  {#each data.services.reverse() as service}
    <Service {service} />
  {/each}
</section>

<style>
  section {
    margin-block: 2rem;
  }
</style>
