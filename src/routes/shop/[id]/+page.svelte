<script lang="ts">
  import { Format } from '$lib/utils'
  import type { PageData } from './$types'

  export let data: PageData

  const {
    items: {
      thumbnail,
      title,
      price,
      brand,
      category,
      id,
      rating,
      stock,
      description,
    },
  } = data
</script>

<section>
  <h1>{title}</h1>
  <img src={thumbnail} alt="" />
  <div>
    <div class="header">
      <button>Buy Now</button>
      <h2 class="price">{Format.dollar(price)}</h2>
    </div>
  </div>
  <div class="meta">
    <div>
      <h3>Brand</h3>
      <p>{brand}</p>
    </div>
    <div>
      <h3>Category</h3>
      <p>
        <a href="/shop/categories/{category}">{Format.toProperCase(category)}</a>
      </p>
    </div>
    <div>
      <h3>Rating</h3>
      <p>{rating}</p>
    </div>
    <div>
      <h3>Stock</h3>
      <p>{stock}</p>
    </div>
    <div>
      <h3>Id</h3>
      <p>{id}</p>
    </div>
  </div>
  <h3>Description</h3>
  <p>{description}</p>
</section>

<style>
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-block: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  .meta {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
