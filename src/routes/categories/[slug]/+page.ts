import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const slugRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/categories?slug=${params.slug}`
  )
  const slugData = await slugRes.json()

  const catRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?categories=${slugData[0].id}&_embed`
  )

  const items = await catRes.json()

  return { items }
}
