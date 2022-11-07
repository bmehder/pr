<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const title = data.service[0].title.rendered
  const src =
    data.service[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
      .source_url
  const content = data.service[0].content.rendered
</script>

<!-- 
Error: Not found: /wp-content/themes/_bd_sprucehealthgroup/components/youtube/youtube.css
    at resolve (file:///vercel/path0/.svelte-kit/output/server/index.js:2030:18)
    at resolve (file:///vercel/path0/.svelte-kit/output/server/index.js:2053:34)
    at Object.options.hooks.handle (file:///vercel/path0/.svelte-kit/output/server/index.js:2205:59)
    at respond (file:///vercel/path0/.svelte-kit/output/server/index.js:2051:42)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
file:///vercel/path0/node_modules/@sveltejs/kit/src/core/prerender/prerender.js:50
				throw new Error(format_error(details, config));
				      ^
Error: 404 /wp-content/themes/_bd_sprucehealthgroup/components/youtube/youtube.css (linked from /services/diabetes-and-metabolic-therapies) -->

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
