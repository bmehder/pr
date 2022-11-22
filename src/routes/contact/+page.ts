import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const response = await fetch('https://dummyjson.com/quotes/random')
  const quote = await response.json()

  return { quote }
}
