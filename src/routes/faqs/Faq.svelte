<script lang="ts">
  import { slide } from 'svelte/transition'

  export let faq

  const title = faq.title.rendered
  const content = faq.content.rendered
  const chevron = 'fa-solid fa-chevron-down'

  let isOpen = false

  const handleClick = () => (isOpen = !isOpen)

  const handleKeypress = (evt: KeyboardEvent) => evt.key === 'Enter' && handleClick()
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
</svelte:head>

<div class="faqs">
  <h3 class="question" on:click={handleClick} on:keypress={handleKeypress}>
    <span>{@html title}</span>
    <i class:isOpen class={chevron} />
  </h3>
  {#if isOpen}
    <div class="answer" transition:slide>{@html content}</div>
  {/if}
</div>

<style>
  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-block: 1rem;
    padding-inline: 1rem;
    background-color: var(--background, var(--dark));
    color: var(--color, var(--white));
    font-weight: normal;
    cursor: pointer;
  }
  .answer {
    padding-inline: 1rem;
    overflow: hidden;
  }
  .fa-chevron-down {
    transition: transform 400ms ease;
    transform-origin: center;
  }
  .isOpen {
    transform: rotate(180deg);
  }
</style>
