import type { RequestEvent } from '@sveltejs/kit'
import type { WP_REST_API_Posts } from 'wp-types'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const offset: string | number = params.number ?? 1

  const url = `https://sprucehealthgroup.com/wp-json/wp/v2/posts?offset=${
    (+offset - 1) * 12
  }&per_page=12&_embed`

  const response = await fetch(url)

  const paginatedPosts: WP_REST_API_Posts = await response.json()

  return { paginatedPosts }
}
