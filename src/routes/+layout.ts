import type { RequestEvent } from '@sveltejs/kit'
type Category = { id: string; name: string }
type SortedFaq = { name: string; faqs: { title: string; content: string }[] }

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  // Posts
  const postsRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?per_page=100&_embed`
  )
  const items = await postsRes.json()

  // Faqs
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

  const sortedFaqs: SortedFaq[] = faqCats.reduce(
    (acc: SortedFaq[], item: Category, index: number) => {
      acc = [...acc, { name: item.name, faqs: faqsByCats[index] }]
      return acc
    },
    []
  )

  // Slides for Hero
  const slides = [
    {
      src: 'img/plant.png',
      text: 'Hello Slider 1',
      options: { top: '50%', left: '50%' },
    },
    {
      src: 'img/plant2.png',
      text: 'Hello Slider 2',
      options: { top: '50%', left: '50%' },
    },
    {
      src: 'img/plant3.png',
      text: 'Hello Slider 3',
      options: { top: '50%', left: '50%' },
    },
    {
      src: 'img/plant4.png',
      text: 'Hello Slider 4',
      options: { top: '38%', left: '38%' },
    },
  ]

  return { items, slides, sortedFaqs }
}
