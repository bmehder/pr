import { json } from '@sveltejs/kit'

const champions = [
  { 2022: 'Max Verstappen' },
  { 2021: 'Max Verstappen' },
  { 2020: 'Lewis Hamilton' },
]

/** @type {import('./$types').RequestHandler} */
export function GET() {
  return json(champions)
}
