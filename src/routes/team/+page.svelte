<script lang="ts">
  import type { PageData } from './$types'
  import Member from './Member.svelte'

  export let data: PageData
</script>

<h1>Team Members</h1>
<div class="grid auto-grid">
  {#each data.members as member}
    <Member {member} />
  {/each}
</div>

<style>
  div {
    margin-block: 2rem;
  }
</style>
