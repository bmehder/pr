export async function load({ fetch }) {
  const res = await fetch('https://dummyjson.com/products?limit=100')
  const items = await res.json()

  return { items }
}
