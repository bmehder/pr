<script lang="ts">
  import '../app.css'
  import type { PageData } from './$types'
  import { page } from '$app/stores'

  import Header from '$lib/Header/Header.svelte'
  import Slider from '$lib/Slider/Slider.svelte'
  import BackToTop from '$lib/Header/BackToTop.svelte'
  import Footer from '$lib/Footer.svelte'

  export let data: PageData
</script>

<div class="wrapper">
  <Header --background="#323232" --color="white" --width="1100px" />

  {#if $page.routeId === '/'}
    <Slider slides={data.slides} duration={6000} />
  {/if}

  <main>
    <slot />
    <BackToTop />
  </main>

  <Footer --background="#323232" --color="white" --width="1100px" />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  main {
    width: 100%;
    max-width: 1100px;
    padding-inline: 1rem;
    margin-inline: auto;
    margin-bottom: 2rem;
  }
</style>
