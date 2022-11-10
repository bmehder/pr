<script lang="ts">
  import Star from './Star.svelte'

  type Review = {
    _bd_reviews_rating: string
    excerpt: {
      rendered: string
    }
    title: {
      rendered: string
    }
    content: {
      rendered: string
    }
    date: Date
  }
  export let review: Review
  export let isSingle = false

  const stars = Array(+review._bd_reviews_rating)
  const excerpt = review.excerpt.rendered
  const content = review.content.rendered
  const citation = review.title.rendered
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as {}
  const date = new Date(review.date).toLocaleDateString('en-US', dateOptions)
</script>

<blockquote on:click on:keypress>
  {#each stars as _}
    <span><Star /></span>
  {/each}
  {#if isSingle}
    {@html content}
  {:else}
    {@html excerpt}
  {/if}
  <cite>{citation}<br /><time>{date}</time> </cite>
</blockquote>

<style>
  blockquote {
    padding: 2rem;
    line-height: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  blockquote :global(p) {
    margin-top: 1rem;
  }
  cite {
    display: block;
    margin-top: 1.5rem;
    text-align: right;
  }
</style>
