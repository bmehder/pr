import type { RequestEvent } from '@sveltejs/kit'

export const prerender = false

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: RequestEvent) => {
    const formData = await request.formData()

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const results = {
      name,
      email,
      message,
    }
    return { results }
  },
}
