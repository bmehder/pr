<script lang="ts">
  export let product

  const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  console.log(product)
</script>

<svelte:head>
  <title>Shop</title>
</svelte:head>

<article>
  <img src={product.thumbnail} alt={product.title} />
  <div>
    <h2>{product.title}</h2>
    <h3>{nf.format(product.price)}</h3>
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
  h3 {
    color: var(--dark);
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>
