<script lang="ts">
  import { navigating } from '$app/stores'
  import { isSubmittingForm } from '../../routes/contact/store'
</script>

<div class:isLoading={!!$navigating || !!$isSubmittingForm} />

<style>
  div {
    width: 0%;
    height: 0.125rem;
    position: fixed;
    background-color: var(--light);
  }
  .isLoading {
    width: 80%;
    transition: width 600ms ease-in-out;
    transition-delay: 200ms;
  }
</style>
