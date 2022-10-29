import type { RequestEvent } from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'
  const FAQ_CATS = 'faq-cats'
  const FAQS_BY_CAT = 'faqs?faq-cats'

  const faqCatsRes = await fetch(`${BASE_URL}${FAQ_CATS}`)
  const faqCats = await faqCatsRes.json()

  type Cat = { id: string }
  const catIds = faqCats.map((cat: Cat) => cat.id)

  const faqsByCatsRes = await Promise.all(
    catIds.map((id: number) => fetch(`${BASE_URL}${FAQS_BY_CAT}=${id}`))
  )

  const faqsByCats = await Promise.all(faqsByCatsRes.map(res => res.json()))

  type SortedFaq = { name: string; faqs: [] }
  type CatName = { name: string }
  const sortedFaqs = faqCats.reduce(
    (acc: SortedFaq[], item: CatName, index: number) => {
      acc = [...acc, { name: item.name, faqs: faqsByCats[index] }]
      return acc
    },
    []
  )

  return { sortedFaqs }
}
