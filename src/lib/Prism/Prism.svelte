<script lang="ts">
  // Svelte Imports
  import { afterUpdate, tick, onMount } from 'svelte'

  // Prism Imports
  import Prism from 'prismjs'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
  import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'

  import CheckIcon from './CheckIcon.svelte'
  import CopyIcon from './CopyIcon.svelte'

  // The code being used
  export let code = ''

  // link https://prismjs.com/#supported-languages
  // import from 'prismjs/components/prism-{lanugage-name}.js'
  // The language being rendered
  export let language = 'javascript'

  // link https://prismjs.com/plugins/line-numbers/
  // Turns on and off line numbers
  export let showLineNumbers = true

  // Link https://prismjs.com/plugins/normalize-whitespace/
  // Turns on and off cleanup plugin
  export let normalizeWhiteSpace = true

  // The defualt config for cleanup white space
  export let normalizeWhiteSpaceConfig = {
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    /*'break-lines': 80,
	'indent': 2,
	'remove-initial-line-feed': false,
	'tabs-to-spaces': 4,
	'spaces-to-tabs': 4*/
  }

  // CSS Classes specified by the user of the component
  export let classes = ''

  // This is the fake coding element
  // let fakeCodeEl

  // This is pre Element
  let preEl: HTMLElement

  // This stored the formatted HTML to display
  let formattedCode = ''

  let isCopied = false

  const copyText = (str: string) => navigator.clipboard.writeText(str)

  const handleClick = () => {
    copyText(code)
    isCopied = true
    setTimeout(() => (isCopied = false), 2000)
  }

  // creates the prism classes
  $: prismClasses = `language-${language} ${showLineNumbers ? 'line-numbers' : ''} ${
    normalizeWhiteSpace === true ? '' : 'no-whitespace-normalization'
  }`

  onMount(() => {
    if (normalizeWhiteSpace) {
      Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhiteSpaceConfig)
    }
  })

  afterUpdate(async () => {
    // We need to wait till everything been rendered before we can
    // call highlightAll and load all the plugins
    await tick()
    // This will make sure all the plugins are loaded
    // Prism.highlight will not do that
    Prism.highlightAllUnder(preEl)
  })

  // Only run if Prism is defined and we code
  $: if (typeof Prism !== 'undefined' && code) {
    formattedCode = Prism.highlight(code, Prism.languages[language], language)
  }
</script>

<div>
  <pre class="{prismClasses} {classes}" bind:this={preEl} {...$$restProps}>
  <code class="language-{language}">
    {@html formattedCode}
  </code>
<button on:click={handleClick} class:isCopied>
  {#if isCopied}Copied <CheckIcon --color="#abe338" />{:else}<CopyIcon />{/if}
</button>
</pre>
</div>

<style>
  div {
    margin-top: 1.5rem;
  }
  pre {
    position: relative;
  }
  button {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    padding: 0.25rem;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom-left-radius: 4px;
    cursor: pointer;
    opacity: 0;
  }
  div:hover button,
  .isCopied {
    opacity: 1;
    transition: opacity 100ms ease-in-out;
    transition-delay: 100ms;
  }
</style>
