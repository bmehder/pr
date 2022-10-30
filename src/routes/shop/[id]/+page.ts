export async function load({ fetch, params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`)
  const items = await res.json()

  return { items }
}
