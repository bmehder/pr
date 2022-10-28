/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/categories?slug=${params.slug}&_embed`
  )
  const data = await res.json()

  const catRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?categories=${data[0].id}&_embed`
  )

  const items = await catRes.json()

  return { items }

  // console.log(data)
}
