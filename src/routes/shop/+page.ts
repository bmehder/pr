export async function load({ fetch }) {
  const res = await fetch('https://dummyjson.com/products?limit=10')
  const items = await res.json()

  return { items }
}
