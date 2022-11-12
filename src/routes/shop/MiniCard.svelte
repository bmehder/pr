<script lang="ts">
  import { Format } from '$lib/utils'

  type Product = {
    id: number
    thumbnail: string
    title: string
    price: number
    category: string
    description: string
  }

  export let product: Product

  const { id, thumbnail, title, price, category, description } = product
</script>

<svelte:head>
  <title>Shop</title>
</svelte:head>

<article>
  <div>
    <a href="/shop/{id}"><img src={thumbnail} alt={title} /></a>
    <div>
      <h2><a href="/shop/{id}">{title}</a></h2>
      <h2>{Format.toDollars(price)}</h2>
    </div>
  </div>
</article>

<style>
  article {
    position: relative;
    max-width: 300px;
    background-color: white;
  }
  div {
    display: flex;
    gap: 1rem;
  }
  div div {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
  h2 {
    font-size: 1rem;
  }
  h2 {
    margin: 0;
  }
  img {
    width: 100px;
    padding: 0.25rem;
    padding-left: 0;
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>
