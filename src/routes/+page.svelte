<script>
  import Water from '$lib/Water.svelte'
</script>

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

<aside>
  <Water --clr="var(--light)" --border="50% 60% 70% 50% / 36% 43% 59% 69%">
    <span slot="heading">01</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Water>
  <Water --clr="var(--medium)" --border="61% 39% 52% 48% / 44% 59% 41% 56%">
    <span slot="heading">02</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Water>
  <Water --clr="var(--dark)" --border="35% 65% 31% 69% / 57% 59% 41% 43%">
    <span slot="heading">03</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Water>
</aside>

<!-- <div class="boxed-content">
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
    <img src="img/slider4.jpg" alt="" />
  </div>
</div> -->

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
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  aside {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 3rem;
    margin-block: 3rem;
  }
  @media screen and (max-width: 700px) {
    div {
      display: flex !important;
      flex-direction: column;
      gap: 0 !important;
    }
  }
</style>
