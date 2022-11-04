<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const date = new Date(data.post[0].date)

  const src =
    data.post[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
      ?.source_url
  const title = data.post[0].title.rendered
  const authorSlug = data.post[0]._embedded.author[0].slug
  const authorName = data.post[0]._embedded.author[0].name
  const content = data.post[0].content.rendered
  const categories = data.post[0]._embedded['wp:term'][0]
</script>

<svelte:head>
  <title>Blog - {title}</title>
</svelte:head>

<article>
  <h1>{@html title}</h1>
  <p>
    Author:
    <a href="/blog/authors/{authorSlug}" data-sveltekit-prefetch>{authorName}</a>
    <span>&#124;</span> Categories:
    {#each categories as category, index}
      {@const separator = index + 1 < categories.length ? ', ' : ''}
      <a href="/blog/categories/{category.slug}" data-sveltekit-prefetch
        >{category.name}</a
      >{separator}
    {/each}
  </p>
  <p>Published on {date.toLocaleDateString('en-US', dateOptions)}</p>
  {#if src}
    <img {src} alt={title} />
  {/if}
  <div>{@html content}</div>
</article>

<style>
  article {
    margin-block: 2rem;
  }
  img {
    width: 100%;
    margin-block: 2rem;
  }
  h1 {
    line-height: 1.25;
  }
  p {
    margin-top: 0rem;
  }
  span {
    padding-inline: 0.5rem;
  }
</style>
