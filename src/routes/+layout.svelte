<script lang="ts">
  import '../app.css'
  import { page } from '$app/stores'
  import type { PageData } from './$types'

  import Header from '$lib/Header/Header.svelte'
  import Slider from '$lib/Slider/Slider.svelte'
  import BackToTop from '$lib/Header/BackToTop.svelte'
  import Footer from '$lib/Footer.svelte'

  export let data: PageData
</script>

<div class="wrapper">
  <Header --background="#323232" --color="white" --width="1100px" />

  <div class="slider">
    {#if $page.routeId === '/'}
      <Slider slides={data.slides} duration={6000} />
    {/if}
  </div>

  <main>
    <slot />
    <BackToTop --background="var(--light)" />
  </main>

  <Footer --background="#323232" --color="var(--white)" --width="1100px" />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .slider {
    display: contents;
  }

  main {
    width: 100%;
    max-width: 1100px;
    padding-block: 2rem 4rem;
    padding-inline: 2rem;
    margin-inline: auto;
    overflow: hidden;
  }

  @media screen and (max-width: 600px) {
    .slider {
      display: none;
    }
  }
</style>
