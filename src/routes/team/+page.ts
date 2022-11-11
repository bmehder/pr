import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + 'team-member?_embed')
  const members = await response.json()

  return { members }
}
