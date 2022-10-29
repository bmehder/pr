<script lang="ts">
  type Tab = {
    heading: string
    content: string
  }

  export let tabs: Tab[]

  let tabIndex = 0
</script>

<aside>
  <ul>
    {#each tabs as tab, loopIndex}
      <li
        class:active={loopIndex === tabIndex}
        on:click={() => (tabIndex = loopIndex)}
        on:keypress
      >
        {tab.heading}
      </li>
    {/each}
  </ul>

  <div>{tabs[tabIndex].content}</div>
</aside>

<style>
  aside {
    max-width: 50%;
    margin-block: 1.5rem;
    border: 1px solid #ddd;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  ul {
    display: flex;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    background: var(--background, #323232);
    color: white;
  }
  li {
    list-style-type: none;
    padding: 1rem;
  }
  .active {
    background: var(--color, tomato);
  }
  div {
    padding: 1rem 1.5rem;
    line-height: 1.4em;
  }
  @media screen and (max-width: 720px) {
    aside {
      max-width: 100%;
    }
  }
</style>
