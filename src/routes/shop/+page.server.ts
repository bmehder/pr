/** @type {import('./$types').Actions} */

export const prerender = false

import type { RequestEvent } from '@sveltejs/kit'

export const actions = {
  default: async ({ request }: RequestEvent) => {
    const formData = await request.formData()
    const searchQuery = formData.get('searchQuery')

    const res = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
    const items = await res.json()
    return { items }
  },
}