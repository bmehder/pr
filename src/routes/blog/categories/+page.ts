import type { RequestEvent } from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const res = await fetch(`https://sprucehealthgroup.com/wp-json/wp/v2/categories`)
  const posts = await res.json()

  return { posts }
}
