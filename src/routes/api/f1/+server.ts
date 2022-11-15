import { json } from '@sveltejs/kit'

const champions = {
  data: [
    { champ: 'Max Verstappen' },
    { champ: 'Max Verstappen' },
    { champ: 'Lewis Hamilton' },
    { champ: 'Lewis Hamilton' },
    { champ: 'Lewis Hamilton' },
    { champ: 'Lewis Hamilton' },
    { champ: 'Nico Rosberg' },
    { champ: 'Lewis Hamilton' },
    { champ: 'Lewis Hamilton' },
    { champ: 'Sebastian Vettel' },
    { champ: 'Sebastian Vettel' },
    { champ: 'Sebastian Vettel' },
    { champ: 'Sebastian Vettel' },
    { champ: 'Jenson Button' },
  ],
}

export const GET = () => json(champions, { status: 200 })
