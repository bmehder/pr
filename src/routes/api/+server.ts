import { json, type RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET({ url }: RequestEvent) {
  const isQuestion = url.search === '?question'
  const isAnswer = url.search === '?answer'

  if (isQuestion) {
    return new Response('What is the meaning of life?')
  }

  if (isAnswer) {
    return new Response(String(42))
  }

  return json('So Long, and Thanks for All the Fish')
}
