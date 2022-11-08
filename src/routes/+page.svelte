<svelte:head>
  <title>Home</title>
</svelte:head>

<h2>Heading One</h2>
<div>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
    Autem neque iste aspernatur repudiandae perspiciatis illum earum numquam.
    Distinctio corrupti fugit consectetur necessitatibus quod dicta ad quae. Quia
    architecto odit sunt porro voluptatum aperiam consequuntur enim, alias deserunt
    quod labore laudantium omnis, impedit accusantium. Delectus expedita beatae
    dignissimos rem recusandae sint corporis animi maxime vitae!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
    Autem neque iste aspernatur repudiandae perspiciatis illum earum numquam.
    Distinctio corrupti fugit consectetur necessitatibus quod dicta ad quae. Quia
    architecto odit sunt porro voluptatum aperiam consequuntur enim, alias deserunt
    quod labore laudantium omnis, impedit accusantium. Delectus expedita beatae
    dignissimos rem recusandae sint corporis animi maxime vitae!
  </p>
</div>

<div class="boxed-content">
  <h2>Ex Sed Recusandae!</h2>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
      corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis
      voluptatum, optio doloribus provident temporibus maxime veritatis quas unde ex
      sed recusandae! ad dicta, incidunt ipsum corrupti est consequuntur quo eum
      eaque, id cupiditate autem eos, veritatis tenetur?
      <button>Learn More</button>
    </p>
    <img src="img/plant2.png" alt="" />
  </div>
</div>

<h2>Heading Three</h2>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit corrupti
  rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum, optio
  doloribus provident temporibus maxime veritatis quas unde ex sed recusandae!
  Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum eaque, id
  cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id. Autem neque iste
  aspernatur repudiandae perspiciatis illum earum numquam.
</p>
<p>
  Distinctio corrupti fugit consectetur necessitatibus quod dicta ad quae. Quia
  architecto odit sunt porro voluptatum aperiam consequuntur enim, alias deserunt
  quod labore laudantium omnis, impedit accusantium. Delectus expedita beatae
  dignissimos rem recusandae sint corporis animi maxime vitae! Voluptas ad dicta,
  incidunt ipsum corrupti est consequuntur quo eum eaque, id cupiditate autem eos,
  veritatis tenetur? Facere hic blanditiis id.
</p>

<style>
  div:not(.boxed-content) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  .boxed-content {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    padding: 4rem;
    background-color: var(--dark);
    color: white;
    font-size: 1.25rem;
    overflow: hidden;
  }
  .boxed-content h2 {
    margin-top: 0;
    font-size: 1.5rem;
  }
  img {
    width: 100%;
    margin-top: -2rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: left;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  button {
    display: block;
    margin-top: 2.5rem;
    padding: 1rem 2rem;
    background-color: var(--light);
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 2px solid var(--light);
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  button:hover {
    background-color: transparent;
    border: 2px solid white;
    box-shadow: none;
  }
  @media screen and (max-width: 700px) {
    div {
      display: flex !important;
      flex-direction: column;
      gap: 0 !important;
    }
    img {
      display: none;
    }
    .boxed-content {
      padding: 2rem;
    }
  }
</style>
