import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const res = await fetch('https://dummyjson.com/products?limit=32')
  const items = await res.json()

  return { items }
}
