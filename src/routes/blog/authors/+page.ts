import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const res = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/users?exclude=1,2,4`
  )
  const items = await res.json()

  return { items }
}
