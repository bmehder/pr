import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + 'career')
  const careers = await response.json()

  const catsResponse = await fetch(BASE_URL + 'career-cats')
  const careerCats = await catsResponse.json()

  return { careers, careerCats }
}
