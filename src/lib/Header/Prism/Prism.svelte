<script lang="ts">
  import Prism from 'prismjs'
  import CheckIcon from './CheckIcon.svelte'
  import CopyIcon from './CopyIcon.svelte'

  export let code = ''

  let isCopied = false

  const copyText = (str: string) => navigator.clipboard.writeText(str)

  const handleClick = () => {
    copyText(code)
    isCopied = true
    setTimeout(() => (isCopied = false), 2000)
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-a11y-dark.min.css"
  />
</svelte:head>

<div>
  <pre>
<code class="language-js">
<br />
      {code}
</code>
<button on:click={handleClick}>
  {#if isCopied}<CheckIcon />{:else}<CopyIcon />{/if}
</button>
</pre>
</div>

<style>
  div {
    margin-top: 1.5rem;
    width: 100%;
  }
  pre {
    position: relative;
    margin-top: 1.5rem;
  }
  button {
    display: grid;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
</style>
