<script lang="ts">
  import { viewport } from '../actions'
  import { isOpen, isShowBackToTop } from './store'
  import { browser } from '$app/environment'

  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'
  import Loading from './Loading.svelte'

  const BREAKPOINT = 768

  let innerWidth: number

  const closeNav = () => ($isOpen = false)
  const toggleNav = () => ($isOpen = !$isOpen)

  $: innerWidth > BREAKPOINT && closeNav()

  $: if (browser && $isOpen) document.body.style.position = 'fixed'
  $: if (browser && !$isOpen) document.body.style.position = 'relative'
</script>

<svelte:window bind:innerWidth />

<Loading />

<header
  class:isOpen={$isOpen}
  use:viewport={{ rootMargin: '100%' }}
  on:enterViewport={() => ($isShowBackToTop = false)}
  on:exitViewport={() => ($isShowBackToTop = true)}
>
  <div>
    <Nav on:click={closeNav} />
    <Hamburger on:click={toggleNav} />
  </div>
</header>

<style>
  header {
    padding-block: 2rem;
    background-color: var(--background, var(--black));
    color: var(--color);
  }
  header.isOpen {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: 1;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--width, 100%);
    margin-inline: auto;
    padding-inline: 2rem;
  }
  @media screen and (max-width: 768px) {
    div {
      padding-inline: 2rem;
    }
    .isOpen div {
      align-items: unset;
    }
  }
</style>
