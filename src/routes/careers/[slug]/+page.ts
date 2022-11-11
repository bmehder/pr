import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + `career?slug=${params.slug}`)
  const career = await response.json()

  return { career }
}
