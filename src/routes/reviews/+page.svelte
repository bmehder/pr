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
    document.body.style.position = 'fixed'
  }

  const closeReview = () => {
    selected = null
    dialogElem?.close()
    // document.body.style.position = 'unset'
  }
</script>

<h1>Reviews</h1>

<div>
  {#each data.reviews as review, index}
    <Review {review} on:click={() => selectReview(index)} />
    <dialog bind:this={dialogElem} use:closeModal>
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
