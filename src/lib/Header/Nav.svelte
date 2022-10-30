<script>
  import { isOpen } from './store'

  const handleClick = async () => {
    $isOpen = false
  }
</script>

<nav class:isOpen={$isOpen}>
  <h1><a on:click={handleClick} href="/">Logo</a></h1>
  <ul>
    <li><a on:click={handleClick} href="/">Home</a></li>
    <li><a on:click={handleClick} href="/about">About</a></li>
    <li><a on:click={handleClick} href="/blog" data-sveltekit-prefetch>Blog</a></li>
    <li><a on:click={handleClick} href="/faqs" data-sveltekit-prefetch>FAQ</a></li>
    <li><a on:click={handleClick} href="/shop">Shop</a></li>
    <li><a on:click={handleClick} href="/contact">Contact</a></li>
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
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 600px) {
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
  }
</style>
