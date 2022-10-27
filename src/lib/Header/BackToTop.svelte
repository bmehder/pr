<script>
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

<div class:visible={$isShowBackToTop}>
  <i class="fa-solid fa-3x fa-circle-arrow-up" on:click={handleClick} on:keypress />
</div>

<style>
  div {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    cursor: default;
    background-color: rebeccapurple;
    border-radius: 50%;
  }
  i {
    border-radius: 50%;
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
    color: var(--color, var(--white));
  }
  .visible {
    opacity: 1;
    cursor: pointer;
  }
</style>
