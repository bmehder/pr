/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(`https://sprucehealthgroup.com/wp-json/wp/v2/posts?_embed`)
  const items = await res.json()

  return { items }
}
