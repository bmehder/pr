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

<style>
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  @media screen and (max-width: 700px) {
    div {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
</style>
