/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/users?slug=${params.slug}`
  )
  const data = await res.json()

  const authorRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?author=${data[0].id}&_embed`
  )

  const items = await authorRes.json()

  return { items }
}
