<script lang="ts">
  export let service

  const slug = service.slug
  const src =
    service._embedded['wp:featuredmedia'][0].media_details.sizes.medium_square
      ?.source_url
  const title = service.title.rendered
</script>

<a href="/services/{slug}" data-sveltekit-prefetch>
  <img {src} alt={title} />
  <h2>{@html title}</h2>
</a>

<style>
  a {
    display: block;
    position: relative;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
    color: white;
  }
  a:hover {
    outline: 4px solid var(--light);
  }
  a:hover h2 {
    height: 100%;
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 2px;
  }
  h2 {
    position: absolute;
    display: grid;
    place-items: center;
    bottom: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.52);
    text-align: center;
    font-size: 1.25rem;
    transition: all 200ms ease-in-out;
  }
</style>
