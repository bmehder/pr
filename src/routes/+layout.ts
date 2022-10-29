import type { RequestEvent } from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: RequestEvent) {
  const res = await fetch(`https://sprucehealthgroup.com/wp-json/wp/v2/posts?_embed`)
  const items = await res.json()

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

  return { items, slides }
}
