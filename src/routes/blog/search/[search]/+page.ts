// TypeScript
import type { RequestEvent } from '@sveltejs/kit'

export const prerender = false

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(
    BASE_URL + `search?search=${params.search}&limit=100&per_page=12`
  )
  const searchResults = await response.json()

  return { searchResults }
}
