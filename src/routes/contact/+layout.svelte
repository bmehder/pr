<h1>Contact</h1>

<div>
  <slot />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6rem;
  }
  @media screen and (max-width: 720px) {
    div {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
