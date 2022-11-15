import { json } from '@sveltejs/kit'

const champions = {
  data: [
    { year: 2022, champ: 'Max Verstappen' },
    { year: 2021, champ: 'Max Verstappen' },
    { year: 2020, champ: 'Lewis Hamilton' },
    { year: 2019, champ: 'Lewis Hamilton' },
    { year: 2018, champ: 'Lewis Hamilton' },
    { year: 2017, champ: 'Lewis Hamilton' },
    { year: 2016, champ: 'Nico Rosberg' },
    { year: 2015, champ: 'Lewis Hamilton' },
    { year: 2014, champ: 'Lewis Hamilton' },
    { year: 2013, champ: 'Sebastian Vettel' },
    { year: 2012, champ: 'Sebastian Vettel' },
    { year: 2011, champ: 'Sebastian Vettel' },
    { year: 2010, champ: 'Sebastian Vettel' },
    { year: 2009, champ: 'Jenson Button' },
  ],
}

export const GET = () => json(champions)
