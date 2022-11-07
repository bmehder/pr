<script lang="ts">
  import type { WP_REST_API_Post } from 'wp-types'

  export let service

  const id = service.id
  const slug = service.slug
  const src =
    service._embedded['wp:featuredmedia'][0].media_details.sizes.medium_square
      ?.source_url
  const title = service.title.rendered
</script>

<article>
  {#if src}
    <a href="/services/{slug}" data-sveltekit-prefetch
      ><img loading="lazy" {src} alt={title} /></a
    >
  {/if}
  <div>
    <h2>
      <a href="/services/{slug}" data-sveltekit-prefetch>{@html title}</a>
    </h2>
  </div>
</article>

<style>
  article {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  div {
    padding: 1.5rem;
  }
  h2 {
    margin-top: 0;
    /* margin-bottom: 1.5rem; */
    line-height: 1.25;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
</style>
