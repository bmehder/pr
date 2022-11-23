<script lang="ts">
  import type { PageData } from './$types'
  import Member from './Member.svelte'

  export let data: PageData

  const executive = [...data.cats].slice(3, 4)
  const firstCats = [...data.cats].slice(0, 2)
  const secondCats = [...data.cats].slice(2).filter((_, index) => index !== 1)
  const sortedCats = [...executive, ...firstCats, ...secondCats]
  console.log(sortedCats)
</script>

<h1>Team Members</h1>
{#each sortedCats as cat}
  <h2>{cat.name}</h2>
  <div class="grid auto-grid">
    {#each data.members as member}
      {#if cat.id === member['team-cats'][0]}
        <Member {member} />
      {/if}
    {/each}
  </div>
{/each}

<style>
  div {
    margin-block: 2rem;
  }
</style>
