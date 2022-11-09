<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const title = data.service[0].title.rendered
  const src =
    data.service[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
      .source_url
  const content = data.service[0].content.rendered
</script>

<h1>{title}</h1>
<img {src} alt={title} />
<section>
  {@html content}
</section>

<style>
  h1 {
    margin-bottom: 1.5rem;
  }
  img,
  section :global(img) {
    width: 100%;
    margin-block: 1.5rem;
    object-fit: cover;
  }
</style>
