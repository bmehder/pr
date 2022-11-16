<script lang="ts">
  import { isOpen } from '$lib/Header/store'

  export let isAutoplay: boolean

  const handleKeypress = (evt: KeyboardEvent) =>
    evt.key === 'p' && (isAutoplay = !isAutoplay)
</script>

<svelte:window on:keypress={handleKeypress} />

{#if !$isOpen}
  {#if isAutoplay}
    <svg
      on:click
      on:keypress
      class:isAutoplay
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
        clip-rule="evenodd"
      />
    </svg>
  {:else}
    <svg
      on:click
      on:keypress
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
        clip-rule="evenodd"
      />
    </svg>
  {/if}
{/if}

<style>
  svg {
    width: var(--width, 2rem);
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    cursor: pointer;
    color: var(--dark);
  }
  .isAutoplay {
    color: var(--light);
  }
</style>
