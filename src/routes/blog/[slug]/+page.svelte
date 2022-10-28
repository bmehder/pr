<script lang="ts">
  export let data

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const date = new Date(data.items[0].date)

  const src =
    data.items[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
      ?.source_url
</script>

<article>
  {#if src}
    <img {src} alt={data.items[0].title.rendered} />
  {/if}
  <h1>{@html data.items[0].title.rendered}</h1>
  <p><strong>Date:</strong> {date.toLocaleDateString('en-US', dateOptions)}</p>
  <p>
    <strong>Author:</strong>
    <a href="/authors/{data.items[0]._embedded.author[0].id}"
      >{data.items[0]._embedded.author[0].name}</a
    >
  </p>
  <p>
    <strong>Categories:</strong>
    {#each data.items[0]._embedded['wp:term'][0] as category, index}
      <a href="/categories/{category.id}">{category.name}</a>{index + 1 <
      data.items[0]._embedded['wp:term'][0].length
        ? ', '
        : ''}
    {/each}
  </p>

  <div>{@html data.items[0].content.rendered}</div>
</article>

<style>
  article {
    margin-block: 2rem;
  }
  img {
    width: 100%;
  }
</style>
