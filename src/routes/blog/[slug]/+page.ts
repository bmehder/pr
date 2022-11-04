import type { RequestEvent } from '@sveltejs/kit'
import type { WP_REST_API_Post } from 'wp-types'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }: RequestEvent) {
  const res = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  )
  const post: WP_REST_API_Post[] = await res.json()

  return { post }
}
