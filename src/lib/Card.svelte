<script lang="ts">
  export let item

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
  }
  img {
    width: 100%;
    object-fit: cover;
  }
</style>
