<script>
  import Water from '$lib/Water.svelte'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h2>One Column</h2>
<div>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
    Autem neque iste aspernatur repudiandae perspiciatis illum earum numquam.
  </p>
  <p>
    Distinctio corrupti fugit consectetur necessitatibus quod dicta ad quae. Quia
    architecto odit sunt porro voluptatum aperiam consequuntur enim, alias deserunt
    quod labore laudantium omnis, impedit accusantium. Delectus expedita beatae
    dignissimos rem recusandae sint corporis animi maxime vitae! Voluptas ad dicta,
    incidunt ipsum corrupti est consequuntur quo eum eaque, id cupiditate autem eos,
    veritatis tenetur? Facere hic blanditiis id.
  </p>
</div>

<h2>Two Columns</h2>
<div class="grid auto-col">
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

<h2>Water Cardsv</h2>
<aside class="grid auto-grid water">
  <Water --clr="var(--light)" --border="50% 60% 70% 50% / 36% 43% 59% 69%">
    <svelte:fragment slot="heading">32</svelte:fragment>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <svelte:fragment slot="button">Read More</svelte:fragment>
  </Water>
  <Water --clr="var(--medium)" --border="61% 39% 52% 48% / 44% 59% 41% 56%">
    <svelte:fragment slot="heading">42</svelte:fragment>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <svelte:fragment slot="button">Read More</svelte:fragment>
  </Water>
  <Water --clr="var(--dark)" --border="35% 65% 31% 69% / 57% 59% 41% 43%">
    <svelte:fragment slot="heading">52</svelte:fragment>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <svelte:fragment slot="button">Read More</svelte:fragment>
  </Water>
</aside>

<h2>Three Columns</h2>
<div class="grid auto-col">
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur?
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur?
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur?
  </p>
</div>

<h2>Four Columns</h2>
<div class="grid auto-col">
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit
    corrupti rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum,
    optio doloribus provident temporibus maxime veritatis quas unde ex sed
    recusandae! Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum
    eaque, id cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id.
  </p>
</div>

<style>
  .water {
    margin-block: 1.5rem 2rem;
  }
</style>
