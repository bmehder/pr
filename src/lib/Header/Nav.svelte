<script>
  import { isOpen } from './store'

  import DarkMode from './DarkMode.svelte'

  const handleClick = async () => {
    $isOpen = false
  }
</script>

<nav class:isOpen={$isOpen}>
  <h1><a on:click={handleClick} href="/">Logo</a></h1>
  <ul>
    <li><a on:click={handleClick} href="/">Home</a></li>
    <li>
      <a on:click={handleClick} href="/about">About</a>
      <ul>
        <li><a on:click={handleClick} href="/team">Team</a></li>
        <li><a on:click={handleClick} href="/careers">Careers</a></li>
      </ul>
    </li>
    <li><a on:click={handleClick} href="/faqs" data-sveltekit-prefetch>FAQ</a></li>
    <li>
      <a on:click={handleClick} href="/blog">Blog</a>
      <ul>
        <li>
          <a on:click={handleClick} href="/blog/categories" data-sveltekit-prefetch
            >Categories</a
          >
        </li>
        <li>
          <a on:click={handleClick} href="/blog/authors" data-sveltekit-prefetch
            >Authors</a
          >
        </li>
      </ul>
    </li>
    <li>
      <a on:click={handleClick} href="/shop" data-sveltekit-prefetch>Shop</a>
      <ul>
        <li>
          <a on:click={handleClick} href="/shop/categories" data-sveltekit-prefetch
            >Categories</a
          >
        </li>
      </ul>
    </li>
    <li>
      <a on:click={handleClick} href="/services" data-sveltekit-prefetch>Services</a>
      <ul>
        <li><a on:click={handleClick} href="/reviews">Reviews</a></li>
      </ul>
    </li>
    <li>
      <a on:click={handleClick} href="/contact">Contact</a>
    </li>
    <li on:click={handleClick} on:keypress><DarkMode --width="1.5rem" /></li>
  </ul>
</nav>

<style>
  h1 {
    margin: 0;
    margin-right: auto;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding-inline: 0;
  }
  li {
    position: relative;
  }
  li:hover ul {
    display: block;
  }
  ul ul {
    display: none;
    position: absolute;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: -1.5rem;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    background-color: #323232;
    z-index: 1;
  }
  ul ul li {
    padding-bottom: 1rem;
  }
  ul ul li:last-of-type {
    padding-bottom: 0.5rem;
  }
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
      gap: 3rem;
    }
    ul {
      display: none;
    }
    .isOpen ul {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .isOpen li {
      padding-bottom: 1rem;
      border-bottom: 2px solid white;
    }
    ul ul {
      display: none !important;
      position: relative;
      gap: 1rem;
      margin-left: 0.25rem;
      padding-bottom: 0;
    }
    .isOpen ul ul li {
      border-bottom: none;
    }
  }
</style>
