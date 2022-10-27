<script lang="ts">
  export let data

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const date = new Date(data.items[0].date)
  console.log(data)
</script>

<article>
  <img
    src={data.items[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
      ?.source_url}
    alt={data.items[0].title.rendered}
  />
  <h1>{@html data.items[0].title.rendered}</h1>
  <p><strong>Date:</strong> {date.toLocaleDateString('en-US', dateOptions)}</p>
  <p>
    <strong>Author:</strong> <a href="/">{data.items[0]._embedded.author[0].name}</a>
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
