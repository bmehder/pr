<script lang="ts">
  export let item
</script>

<article>
  <a href="/blog/{item.slug}" data-sveltekit-prefetch
    ><img
      src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium_square
        ?.source_url}
      alt={item.title.rendered}
    /></a
  >
  <div>
    <h2>
      <a href="/blog/{item.slug}" data-sveltekit-prefetch
        >{@html item.title.rendered}</a
      >
    </h2>
    {@html item.excerpt.rendered}
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
