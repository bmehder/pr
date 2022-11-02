import type { RequestEvent } from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  // Posts
  const postsRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?per_page=10&_embed`
  )
  const posts = await postsRes.json()

  return { posts }
}
