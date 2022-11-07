import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ fetch, params }: RequestEvent) => {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(
    BASE_URL + `service/?slug=${params.slug}&exclude=3550&_embed`
  )

  const service = await response.json()

  return { service }
}
