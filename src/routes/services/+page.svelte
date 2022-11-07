<script lang="ts">
  import type { PageData } from './$types'
  import Service from './Service.svelte'

  export let data: PageData

  console.log(data)
</script>

<h1>Services</h1>

<section>
  {#each data.services.reverse() as service}
    <Service {service} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    gap: 3rem;
    margin-block: 2rem;
  }
</style>
