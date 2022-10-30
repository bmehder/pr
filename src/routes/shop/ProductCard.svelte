<script lang="ts">
  export let product

  const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
</script>

<svelte:head>
  <title>Shop</title>
</svelte:head>

<article>
  <a href="/shop/{product.id}"><img src={product.thumbnail} alt={product.title} /></a
  >
  <div>
    <h2><a href="/shop/{product.id}">{product.title}</a></h2>
    <h3>{nf.format(product.price)}</h3>
    <p>
      Category: <a href="/shop/categories/{product.category}">{product.category}</a>
    </p>
    <p>{product.description}</p>
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
