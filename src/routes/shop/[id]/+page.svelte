<script lang="ts">
  export let data

  console.log(data)

  const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

  const {
    items: { images, title, price, brand, category, rating, stock, description },
  } = data
</script>

<img src={images[0]} alt="" />
<h1>{title}</h1>
<h2 class="price">{nf.format(price)}</h2>
<div>
  <div>
    <h3>Brand</h3>
    <p>{brand}</p>
  </div>
  <div>
    <h3>Category</h3>
    <p>{category}</p>
  </div>
  <div>
    <h3>Rating</h3>
    <p>{rating}</p>
  </div>
  <div>
    <h3>Stock</h3>
    <p>{stock}</p>
  </div>
</div>
<h3>Description</h3>
<p>{description}</p>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  div div {
    display: block;
  }
  .price {
    color: var(--dark);
  }
  img {
    width: 100%;
  }
</style>
