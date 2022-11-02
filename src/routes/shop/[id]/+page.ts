import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`)
  const items = await res.json()

  return { items }
}
