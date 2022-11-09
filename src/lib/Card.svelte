<script lang="ts">
  import type { WP_REST_API_Post } from 'wp-types'

  export let item: WP_REST_API_Post

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as {}
  const date = new Date(item.date)

  const slug = item.slug
  const src =
    item._embedded['wp:featuredmedia'][0].media_details.sizes.medium_square
      ?.source_url
  const title = item.title.rendered
  const excerpt = item.excerpt.rendered
</script>

<article>
  {#if src}
    <a href="/blog/{slug}" data-sveltekit-prefetch
      ><img loading="lazy" {src} alt={title} /></a
    >
  {/if}
  <div>
    <h2>
      <a href="/blog/{slug}" data-sveltekit-prefetch>{@html title}</a>
    </h2>
    <p>
      {date.toLocaleDateString('en-US', dateOptions)}
    </p>
    <p>
      Author:
      <a href="/blog/authors/{item._embedded.author[0].slug}" data-sveltekit-prefetch
        >{item._embedded.author[0].name}</a
      >
    </p>
    <p>
      Categories:
      {#each item._embedded['wp:term'][0] as category, index}
        <a href="/blog/categories/{category.slug}" data-sveltekit-prefetch
          >{category.name}</a
        >{index + 1 < item._embedded['wp:term'][0].length ? ', ' : ''}
      {/each}
    </p>
    {@html excerpt}
  </div>
</article>

<style>
  article {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  div {
    padding: 2rem;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    line-height: 1.25;
  }
  p {
    margin-top: 0.25rem;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
</style>
