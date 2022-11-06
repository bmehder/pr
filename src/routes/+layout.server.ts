export const prerender = true

import type { RequestEvent } from '@sveltejs/kit'

import type { WP_REST_API_Posts } from 'wp-types'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  type Posts = WP_REST_API_Posts
  // Posts
  const POSTS_PER_PAGE = 12

  const postsCountRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?per_page=100`
  )
  const allPosts: Posts = await postsCountRes.json()
  const postsCount: number = allPosts.length

  const postsRes = await fetch(
    `https://sprucehealthgroup.com/wp-json/wp/v2/posts?per_page=${POSTS_PER_PAGE}&_embed`
  )
  const posts: Posts = await postsRes.json()

  // Faqs
  type Category = { id: number; name: string }
  type Faq = { title: string; content: string }
  type Faqs = { name: string; faqs: Faq[] }

  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'
  const FAQ_CATS = 'faq-cats'
  const FAQS_BY_CAT = 'faqs?faq-cats='

  const faqCatsRes = await fetch(`${BASE_URL}${FAQ_CATS}`)
  const faqCats: Category[] = await faqCatsRes.json()

  const catIds: number[] = faqCats.map((cat: Category) => cat.id)

  const getFaqsByCats = catIds.map((id: number) =>
    fetch(`${BASE_URL}${FAQS_BY_CAT}${id}`)
  )
  const faqsByCatsRes = await Promise.all(getFaqsByCats)
  const faqsByCats: Faq[][] = await Promise.all(faqsByCatsRes.map(res => res.json()))

  const faqs: Faqs[] = faqCats.reduce(
    (acc: Faqs[], item: Category, index: number) => {
      acc = [...acc, { name: item.name, faqs: faqsByCats[index] }]
      return acc
    },
    []
  )

  // Slides
  type Slides = {
    src: string
    text: string
    options: {
      top?: string
      left?: string
      transform?: string
    }
  }[]

  const slides: Slides = [
    {
      src: 'img/plant.png',
      text: 'Hello <br /> Slider 1',
      options: { top: '50%', left: '25%' },
    },
    {
      src: 'img/plant2.png',
      text: 'Hello <br /> Slider 2',
      options: { top: '50%', left: '29%' },
    },
    {
      src: 'img/plant3.png',
      text: 'Hello <br /> Slider 3',
      options: { top: '50%', left: '26%' },
    },
    {
      src: 'img/plant4.png',
      text: 'Hello <br /> Slider 4',
      options: { top: '50%', left: '64%' },
    },
  ]

  return { posts, postsCount, faqs, slides }
}
