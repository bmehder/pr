import type { RequestEvent } from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  // Faqs
  type Category = { id: string; name: string }
  type Faq = { name: string; faqs: { title: string; content: string }[] }

  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'
  const FAQ_CATS = 'faq-cats'
  const FAQS_BY_CAT = 'faqs?faq-cats='

  const faqCatsRes = await fetch(`${BASE_URL}${FAQ_CATS}`)
  const faqCats = await faqCatsRes.json()

  const catIds = faqCats.map((cat: Category) => cat.id)

  const getFaqsByCatsId = catIds.map((id: number) =>
    fetch(`${BASE_URL}${FAQS_BY_CAT}${id}`)
  )
  const faqsByCatsRes = await Promise.all(getFaqsByCatsId)
  const faqsByCats = await Promise.all(faqsByCatsRes.map(res => res.json()))

  const faqs: Faq[] = faqCats.reduce((acc: Faq[], item: Category, index: number) => {
    acc = [...acc, { name: item.name, faqs: faqsByCats[index] }]
    return acc
  }, [])

  return { faqs }
}
