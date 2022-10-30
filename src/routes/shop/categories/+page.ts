export async function load({ fetch }) {
  const res = await fetch('https://dummyjson.com/products/categories/')
  const items = await res.json()

  return { items }
}
