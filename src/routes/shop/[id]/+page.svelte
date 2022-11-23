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
  <div class="header">
    <img src={thumbnail} alt="" />
    <div>
      <div>
        <h2 class="price">{Format.toDollars(price)}</h2>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" value="1" />
        <a href={'#'} class="button">Buy Now</a>
      </div>
    </div>
  </div>
  <h3>Description</h3>
  <p>{description}</p>
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
</section>

<style>
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24); */
  }
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    gap: 3rem;
    margin-block: 1.5rem 2rem;
  }
  .header div {
    display: grid;
    gap: 0.5rem;
    justify-content: start;
    align-self: start;
    margin-top: 0.5rem;
  }
  label {
    font-weight: bold;
  }
  input {
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
  .meta {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    margin-block: 1.5rem;
    padding: 1rem;
    background-color: white;
    overflow: hidden;
  }
  .meta h3,
  .meta p {
    margin: 0;
  }
  .price {
    margin: 0;
    color: var(--light);
  }
  .button {
    display: grid;
    place-content: center;
    margin-block: 0;
  }

  @media screen and (max-width: 720px) {
    .header {
      display: block;
    }
  }
</style>
