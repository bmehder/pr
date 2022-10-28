/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?categories=${params.category}&_embed`
  )
  const items = await res.json()

  return { items }
}
