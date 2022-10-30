export async function load({ fetch, params }) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${params.category}`
  )
  const items = await res.json()

  return { items }
}
