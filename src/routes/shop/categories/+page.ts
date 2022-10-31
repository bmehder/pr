import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const res = await fetch('https://dummyjson.com/products/categories/')
  const items = await res.json()

  return { items }
}
