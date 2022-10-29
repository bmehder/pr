import type { RequestEvent } from '@sveltejs/kit'

export async function load({ fetch, params }: RequestEvent) {
  const usersBySlug = `https://sprucehealthgroup.com/wp-json/wp/v2/users?slug=${params.slug}`

  const usersRes = await fetch(usersBySlug)

  const usersData = await usersRes.json()

  const postsById = `https://sprucehealthgroup.com/wp-json/wp/v2/posts?author=${usersData[0].id}&_embed`

  const authorRes = await fetch(postsById)

  const items = await authorRes.json()

  return { items }
}
