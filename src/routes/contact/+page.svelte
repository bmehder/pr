<script lang="ts">
  import type { ActionData, PageData } from './$types'
  import { isSubmittingForm } from './store'

  import Form from './Form.svelte'
  import Refresh from './Refresh.svelte'

  export let form: ActionData
  export let data: PageData

  let newQuote: { quote: string; author: string }

  $: form?.results && ($isSubmittingForm = false)

  const getQuote = async () => {
    const response = await fetch('https://dummyjson.com/quotes/random')
    const quote = await response.json()

    newQuote = quote
  }
  console.log(data)
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <title>Contact</title>
</svelte:head>

{#if form?.results}
  <div>
    <h3>Response from server</h3>
    <pre>{JSON.stringify(form?.results, null, 2)}</pre>
  </div>
{:else}
  <Form />
{/if}

<div>
  <h2>Company Info</h2>
  <p>
    Mr. Tom Foolery<br />
    1600 Shenanigans Ln<br />
    New York, NY 10032<br />
  </p>
  <h2>Phone</h2>
  <p><a href="tel:+18608675309">+1 (860) 867-5309</a></p>
  <h2>Socials</h2>
  <ul>
    <li><i class="fa-brands fa-2x fa-facebook" /></li>
    <li><i class="fa-brands fa-2x fa-twitter" /></li>
    <li><i class="fa-brands fa-2x fa-linkedin" /></li>
    <li><i class="fa-brands fa-2x fa-instagram" /></li>
  </ul>
  <h2>Quote of the Day <Refresh on:click={getQuote} on:keypress /></h2>

  <blockquote>"{newQuote?.quote ?? data.quote.quote}"</blockquote>
  <cite>– {newQuote?.author ?? data.quote.author}</cite>
</div>

<style>
  ul {
    display: flex;
    gap: 1rem;
    padding: 0;
    list-style-type: none;
    color: #323232;
  }
  .fa-brands {
    cursor: pointer;
  }
  .fa-brands:hover {
    color: var(--light) !important;
  }
  blockquote {
    margin-top: 1.5rem;
    line-height: 1.5rem;
    font-style: italic;
  }
  cite {
    display: block;
    margin-top: 1rem;
    text-align: right;
    font-style: normal;
  }
  :global(body.dark) .fa-brands {
    color: white;
  }
</style>
