<script lang="ts">
  import { isShowBackToTop } from './store'

  const handleClick = () => {
    $isShowBackToTop &&
      scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
  }
</script>

<div class:visible={$isShowBackToTop} on:click={handleClick} on:keypress>
  <!-- <i class="fa-solid fa-3x fa-circle-arrow-up" on:click={handleClick} on:keypress /> -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-6 h-6"
  >
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
      clip-rule="evenodd"
    />
  </svg>
</div>

<style>
  div {
    position: fixed;
    width: 3rem;
    height: 3rem;
    bottom: 2rem;
    right: 2rem;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    cursor: default;
    background-color: transparent;
    border-radius: 50%;
  }
  svg {
    width: 3rem;
    border-radius: 50%;
    color: var(--background, white);
    transition: scale 100ms ease-in-out;
  }
  svg:hover {
    scale: 0.95;
  }
  .visible {
    opacity: 1;
    cursor: pointer;
  }
</style>
