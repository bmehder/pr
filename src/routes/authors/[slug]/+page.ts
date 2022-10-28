/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const usersRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/users?slug=${params.slug}`
  )
  const usersData = await usersRes.json()

  const authorRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?author=${usersData[0].id}&_embed`
  )

  const items = await authorRes.json()

  return { items }
}
