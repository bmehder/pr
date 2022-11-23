<script lang="ts">
  import { debug } from 'svelte/internal'
  import type { PageData } from './$types'

  import Career from './Career.svelte'

  export let data: PageData

  let value: string = 'Show all locations...'
</script>

<header>
  <h1>Careers</h1>

  <select bind:value>
    <option>Show all locations...</option>
    {#each data.careerCats as { name }}
      <option>{name}</option>
    {/each}
  </select>
</header>

{#if value !== 'Show all locations...'}
  <div class="grid">
    {#each data.careerCats as cat}
      {#if cat.name === value}
        <h2>{cat.name}</h2>
      {/if}
      {#each data.careers as career}
        {#if cat.id === career['career-cats'][0]}
          {#if cat.name === value}
            <Career {career} cats={data.careerCats} />
          {/if}
        {/if}
      {/each}
    {/each}
  </div>
{/if}

{#if value === 'Show all locations...'}
  {#each data.careerCats as cat}
    {#if cat.name != 'Colorado Springs'}
      <h2>{cat.name}</h2>
    {/if}
    <div class="grid">
      {#each data.careers as career}
        {#if cat.id === career['career-cats'][0]}
          <Career {career} cats={data.careerCats} />
        {/if}
      {/each}
    </div>
  {/each}
{/if}

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 1.5rem;
  }
  header h1 {
    margin: 0;
  }
  div {
    margin-block: 1.5rem;
  }
  select {
    padding: 0.5rem 1rem;
  }
</style>
