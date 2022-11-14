import { json } from '@sveltejs/kit'

const champions = {
  data: [
    { champ: 'Max Verstappen' },
    { champ: 'Max Verstappen' },
    { champ: 'Lewis Hamilton' },
  ],
}

/** @type {import('./$types').RequestHandler} */
export function GET() {
  // return new Response(JSON.stringify(champions), { status: 200 })

  return json(champions, { status: 200 })
}
