<script lang="ts">
  import type { PageData } from './$types'
  import { closeModal } from './actions'
  import Review from './Review.svelte'

  export let data: PageData

  let selected: number | null
  let dialogElem: HTMLDialogElement

  const selectReview = (index: number) => {
    selected = index
    dialogElem.showModal()
    // document.body.style.position = 'fixed'
  }

  const handleCloseButton = () => {
    selected = null
    dialogElem.close()
  }

  $: console.log(dialogElem?.attributes)
</script>

<h1>Reviews</h1>

<div>
  {#each data.reviews as review, index}
    <Review {review} on:click={() => selectReview(index)} />
    <dialog
      bind:this={dialogElem}
      on:click={() => (selected = null)}
      use:closeModal
      on:keypress
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
        on:click={handleCloseButton}
        on:keypress
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clip-rule="evenodd"
        />
      </svg>

      {#if selected != null}
        <Review isSingle={true} review={data.reviews[selected]} />
      {/if}
    </dialog>
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    gap: 3rem;
    margin-block: 1.5rem;
  }
  dialog {
    position: relative;
  }
  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    color: var(--light);
    cursor: pointer;
  }
  dialog:modal {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 100%;
    width: 50%;
    transform: translate(-50%, -50%);
    user-select: text;
    visibility: visible;
    border-radius: 1rem;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
</style>
