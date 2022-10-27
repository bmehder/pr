<script>
  import { isOpen } from './store'
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

{#if $isOpen}
  <i class="fa-solid fa-2x fa-x" on:click on:keypress />
{:else}
  <i class="fa fa-2x fa-bars" on:click on:keypress />
{/if}

<style>
  @media screen and (min-width: 600px) {
    i {
      display: none;
    }
  }
</style>
