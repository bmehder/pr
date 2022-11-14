// import { json } from '@sveltejs/kit'

const champions = {
  data: [
    { year: 2022, champ: 'Max Verstappen' },
    { year: 2021, champ: 'Max Verstappen' },
    { year: 2020, champ: 'Lewis Hamilton' },
  ],
}

/** @type {import('./$types').RequestHandler} */
export function GET() {
  return new Response(JSON.stringify(champions), { status: 200 })

  // return json(champions)
}
