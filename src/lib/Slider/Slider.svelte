<script lang="ts">
  import LeftArrow from './LeftArrow.svelte'
  import PausePlay from './PausePlay.svelte'
  import RightArrow from './RightArrow.svelte'

  // Slides
  type Slides = {
    src: string
    text: string
    options: {
      top?: string
      left?: string
      transform?: string
    }
  }[]

  export let slides: Slides = []
  export let duration = 6000

  let container: HTMLElement
  let innerWidth: number
  let intervalId: number | null = null
  let isAutoplay = true
  let xPosition = 0

  const stopAutoPlay = () => clearInterval(intervalId)

  const toggleAutoplay = () => (isAutoplay = !isAutoplay)

  const startAutoPlay = (node, isAutoplay) => {
    const play = () => (intervalId = setInterval(moveSlides, duration))

    isAutoplay ? play() : stopAutoPlay()

    return {
      update(isNewAutoplay) {
        isNewAutoplay ? play() : stopAutoPlay()
      },
      destroy() {
        stopAutoPlay()
      },
    }
  }

  const reset = () => {
    container.scrollTo({ left: 0, behavior: 'smooth' })
    xPosition = 0
  }

  const moveSlides = direction => {
    const isBack = direction === 'Back'
    const scrollLeftOptions = { left: -innerWidth, behavior: 'smooth' }
    const scrollRightOptions = { left: innerWidth, behavior: 'smooth' }
    const scrollToOptions = isBack ? scrollLeftOptions : scrollRightOptions

    const isEnd = () => xPosition === innerWidth * slides.length

    const setXPosition = () => {
      xPosition = container.scrollLeft + innerWidth

      isEnd() && reset()
    }

    container.scrollBy(scrollToOptions)
    setXPosition()
  }

  const handleKeydown = (evt: KeyboardEvent) => {
    evt.key === 'ArrowLeft' && moveSlides('Back')
    evt.key === 'ArrowRight' && moveSlides('Forward')
  }
</script>

<svelte:window bind:innerWidth on:keydown={handleKeydown} />

<aside use:startAutoPlay={isAutoplay}>
  <PausePlay on:click={toggleAutoplay} {isAutoplay} />

  <div bind:this={container}>
    {#each slides as { src, text, options: { top, left, transform } }}
      <article>
        <img {src} alt="" />
        <h2 style="top: {top}; left: {left};">
          <span>{@html text}</span>
        </h2>
      </article>
    {/each}
  </div>

  <LeftArrow on:click={() => moveSlides('Back')} />
  <RightArrow on:click={() => moveSlides('Forward')} />
</aside>

<style>
  aside {
    position: relative;
  }
  div {
    position: relative;
    width: 100%;
    height: var(--height, 70vh);
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    scroll-snap-align: start;
    object-fit: cover;
    transform: rotateY(180deg);
  }
  article {
    position: relative;
    min-width: 100%;
  }
  h2 {
    position: absolute;
    /* top: 50%;
    left: 50%; */
    margin: 0;
    color: var(--dark);
    font-size: 10vw;
    line-height: 1.1em;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  span {
    background: linear-gradient(
      to right,
      var(--dark),
      var(--medium),
      var(--light),
      var(--dark)
    );
    background-size: 200%;
    white-space: nowrap;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: background-pan 8s linear infinite;
  }
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  }
  @media screen and (max-width: 600px) {
    div {
      height: 90vh;
    }
    h2 {
      top: 20% !important;
      left: 50% !important;
      font-size: 5rem;
    }
  }
</style>
