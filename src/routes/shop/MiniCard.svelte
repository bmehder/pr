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

  const { id, thumbnail, title, price } = product
</script>

<svelte:head>
  <title>Shop</title>
</svelte:head>

<article>
  <div>
    <a href="/shop/{id}"><img src={thumbnail} alt={title} /></a>
    <div>
      <p><a href="/shop/{id}">{title}</a></p>
      <p><small>{Format.toDollars(price)}</small></p>
    </div>
  </div>
</article>

<style>
  article {
    position: relative;
    background-color: white;
    font-weight: bold;
  }
  div {
    display: flex;
    gap: 1.5rem;
  }
  div div {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
  p {
    margin: 0;
  }
  img {
    width: 100px;
    aspect-ratio: 1;
    object-fit: cover;
  }
  @media screen and (max-width: 769px) {
    article {
      max-width: none;
    }
  }
</style>
