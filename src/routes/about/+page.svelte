<script lang="ts">
  import type { PageData } from './$types'

  import Tabs from '$lib/Tabs.svelte'
  import SvelteTube from '$lib/SvelteTube.svelte'
  import Prism from '$lib/Prism/Prism.svelte'

  export let data: PageData
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-a11y-dark.min.css"
  />
  <title>About</title>
</svelte:head>

<h1>About</h1>

<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit corrupti
  rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum, optio
  doloribus provident temporibus maxime veritatis quas unde ex sed recusandae!
  Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum eaque, id
  cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id. Autem neque iste
  aspernatur repudiandae perspiciatis illum earum numquam. Distinctio corrupti fugit
  consectetur necessitatibus quod dicta ad quae. Quia architecto odit sunt porro
  voluptatum aperiam consequuntur enim, alias deserunt quod labore laudantium omnis,
  impedit accusantium. Delectus expedita beatae dignissimos rem recusandae sint
  corporis animi maxime vitae!
</p>

<h2>Tabsv Component</h2>
<Tabs tabs={data.tabs} --color="var(--light)" />

<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit corrupti
  rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum, optio
  doloribus provident temporibus maxime veritatis quas unde ex sed recusandae!
  Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum eaque, id
  cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id. Autem neque iste
  aspernatur repudiandae perspiciatis illum earum numquam. Distinctio corrupti fugit
  consectetur necessitatibus quod dicta ad quae. Quia architecto odit sunt porro
  voluptatum aperiam consequuntur enim, alias deserunt quod labore laudantium omnis,
  impedit accusantium. Delectus expedita beatae dignissimos rem recusandae sint
  corporis animi maxime vitae!
</p>

<h2>Reactivity Rethunk with SvelteTube</h2>

<aside>
  <SvelteTube
    id="AdNJ3fydeao"
    color="#fff6"
    title="Rethinking Reactivity by Rich Harris"
    radius="1rem"
    shadow="0 10px 20px rgba(0,0,0,0.24)"
  />
</aside>

<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit corrupti
  rerum fugit vero optio veritatis qui velit. Est quis facilis voluptatum, optio
  doloribus provident temporibus maxime veritatis quas unde ex sed recusandae!
  Voluptas ad dicta, incidunt ipsum corrupti est consequuntur quo eum eaque, id
  cupiditate autem eos, veritatis tenetur? Facere hic blanditiis id. Autem neque iste
  aspernatur repudiandae perspiciatis illum earum numquam. Distinctio corrupti fugit
  consectetur necessitatibus quod dicta ad quae. Quia architecto odit sunt porro
  voluptatum aperiam consequuntur enim, alias deserunt quod labore laudantium omnis,
  impedit accusantium. Delectus expedita beatae dignissimos rem recusandae sint
  corporis animi maxime vitae!
</p>

<h2>Prisvm Components</h2>

<h3>Copy text to the Clipboard</h3>
<Prism code="const copyText = str => navigator.clipboard.writeText(str)" />

<h3>Turn on the browser's design mode</h3>
<Prism code="const enterDesignMode = () => document.designMode = 'on'" />

<h3>Load posts from WP REST API w/ SvelteKit</h3>
<Prism
  code={`
  // JavaScript
  export async function load({ fetch }) {
    const BASE_URL = 'https://example.com/wp-json/wp/v2/'

    const response = await fetch(BASE_URL + 'posts')
    const posts = await response.json()

    return { posts }
  }`}
/>

<Prism
  code={`
  // TypeScript
  import type { RequestEvent } from '@sveltejs/kit'
  import type { WP_REST_API_Posts } from 'wp-types'
  
  /** @type {import('./$types').PageLoad} */
  export async function load({ fetch }: RequestEvent) {
    const BASE_URL = 'https://example.com/wp-json/wp/v2/'

    const response = await fetch(BASE_URL + 'posts')
    const posts: WP_REST_API_Posts = await response.json()

    return { posts }
  }`}
/>

<style>
  aside {
    max-width: 50%;
    padding-top: 1.5rem;
  }
  @media screen and (max-width: 720px) {
    aside {
      max-width: 100%;
    }
  }
</style>
