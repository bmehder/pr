import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ fetch }: RequestEvent) => {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + 'service?exclude=3550&_embed')
  const services = await response.json()

  return { services }
}
