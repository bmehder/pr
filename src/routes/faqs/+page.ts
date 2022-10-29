import type { RequestEvent } from '@sveltejs/kit'
type Category = { id: string; name: string }
type SortedFaq = { name: string; faqs: [] }

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'
  const FAQ_CATS = 'faq-cats'
  const FAQS_BY_CAT = 'faqs?faq-cats'

  const faqCatsRes = await fetch(`${BASE_URL}${FAQ_CATS}`)
  const faqCats = await faqCatsRes.json()

  const catIds = faqCats.map((cat: Category) => cat.id)

  const getFaqsByCatsId = catIds.map((id: number) =>
    fetch(`${BASE_URL}${FAQS_BY_CAT}=${id}`)
  )
  const faqsByCatsRes = await Promise.all(getFaqsByCatsId)
  const faqsByCats = await Promise.all(faqsByCatsRes.map(res => res.json()))

  const sortedFaqs = faqCats.reduce(
    (acc: SortedFaq[], item: Category, index: number) => {
      acc = [...acc, { name: item.name, faqs: faqsByCats[index] }]
      return acc
    },
    []
  )

  return { sortedFaqs }
}
