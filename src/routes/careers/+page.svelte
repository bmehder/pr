<script lang="ts">
  import type { PageData } from './$types'

  import Career from './Career.svelte'
  export let data: PageData
</script>

<h1>Careers</h1>
<details>
  <summary>Content Note:</summary>
  <p>
    <em
      >The Careers custom post type does not include custom fields in the REST API
      response. So, all I have to work with (for now) is the generic WP post info
      (i.e., title, content, etc.)</em
    >
  </p>
  <br />
  <hr />
</details>

<div>
  {#each data.careers as career}
    <Career {career} />
  {/each}
</div>

<style>
  div {
    display: grid;
    gap: 2rem;
    margin-block: 2rem;
  }
  p {
    padding-inline: 1rem;
  }
</style>
