<script lang="ts">
  import type { PageData } from './$types'
  import Close from '$lib/CloseButton.svelte'
  import Review from './Review.svelte'

  export let data: PageData

  let selected: number | null
  let dialogElem: HTMLDialogElement

  const closeModal = (element: HTMLDialogElement) => {
    const callback = (event: MouseEvent) => {
      const dialogElement = element.getBoundingClientRect()

      const isInDialog =
        dialogElement.top <= event.clientY &&
        event.clientY <= dialogElement.top + dialogElement.height &&
        dialogElement.left <= event.clientX &&
        event.clientX <= dialogElement.left + dialogElement.width

      if (!isInDialog) {
        element.close()
        selected = null
      }
    }

    element.addEventListener('click', callback)

    return {
      destroy() {
        element.removeEventListener('click', callback)
      },
    }
  }

  const selectReview = (index: number) => {
    selected = index
    dialogElem.showModal()
  }

  const handleCloseButton = () => {
    selected = null
    dialogElem?.close()
  }
</script>

<h1>Reviews</h1>

<div>
  {#each data.reviews as review, index}
    <Review {review} on:click={() => selectReview(index)} />
    <dialog
      bind:this={dialogElem}
      use:closeModal
      on:click|self={() => (selected = null)}
      on:keypress
    >
      <Close --width="4rem" on:click={handleCloseButton} />
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
    border-top-right-radius: 0;
    overflow: visible;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
  @media screen and (max-width: 768px) {
    dialog:modal {
      width: 90%;
    }
  }
</style>
