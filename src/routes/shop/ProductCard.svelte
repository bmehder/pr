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
  <a href="/shop/{id}"><img src={thumbnail} alt={title} /></a>
  <div>
    <h2><a href="/shop/{id}">{title}</a></h2>
    <h3>{Format.toDollars(price)}</h3>
    <p>
      Category: <a href="/shop/categories/{category}"
        >{Format.toProperCase(category)}</a
      >
    </p>
    <p>{description}</p>
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
    margin-bottom: 1.5rem;
    line-height: 1.25;
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>
