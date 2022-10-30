<script lang="ts">
  export let data

  console.log(data)

  const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

  const {
    items: { thumbnail, title, price, brand, category, rating, stock, description },
  } = data
</script>

<section>
  <h1>{title}</h1>
  <img src={thumbnail} alt="" />
  <div>
    <div class="header">
      <button>Buy Now</button>
      <h2 class="price">{nf.format(price)}</h2>
    </div>
  </div>
  <div class="meta">
    <div>
      <h3>Brand</h3>
      <p>{brand}</p>
    </div>
    <div>
      <h3>Category</h3>
      <p><a href="/shop/categories/{category}">{category}</a></p>
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
</section>

<style>
  img {
    width: 300px;
    margin-block: 1.5rem;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  .meta {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .meta div {
    display: block;
  }
  .price {
    margin: 0;
    color: var(--light);
  }
  button {
    padding: 1rem 2rem;
    background-color: var(--light);
    border: none;
    color: white;
    cursor: pointer;
    transition: scale 100ms ease-in-out;
  }
  button:hover {
    scale: 0.95;
  }
  p {
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 720px) {
    .header {
      display: block;
    }
  }
</style>
