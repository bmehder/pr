import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + 'team-member?per_page=100&_embed')
  const members = await response.json()

  const catResponse = await fetch(BASE_URL + 'team-cats')
  const cats = await catResponse.json()

  return { members, cats }
}
