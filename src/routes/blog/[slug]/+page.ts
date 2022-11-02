import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const res = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  )
  const items = await res.json()

  return { items }
}
