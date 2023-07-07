export interface IReviews {
  id: number
  user: string
  avatar: string
  rating: number
}

export const reviews: IReviews[] = [
  {
    id: 1,
    user: 'Виктория',
    avatar: 'https://i.imgur.com/osefxZ8.jpg',
    rating: 4,
  },

  {
    id: 2,
    user: 'Анна',
    avatar: 'https://i.imgur.com/59BoB78.jpg',
    rating: 5,
  },

  {
    id: 3,
    user: 'Ирина',
    avatar: 'https://i.imgur.com/H55HUF1.jpg',
    rating: 5,
  },

  {
    id: 4,
    user: 'Михаил',
    avatar: 'https://i.imgur.com/nvFyc50.jpg',
    rating: 4,
  },

  {
    id: 5,
    user: 'Сергей',
    avatar: 'https://i.imgur.com/06xBVbC.jpg',
    rating: 4,
  },

  {
    id: 6,
    user: 'Александр',
    avatar: 'https://i.imgur.com/Zm1RSy6.jpg',
    rating: 5,
  },

  {
    id: 7,
    user: 'Дэн',
    avatar: 'https://i.imgur.com/jZwTiif.jpg',
    rating: 4,
  },

  {
    id: 8,
    user: 'Егор',
    avatar: 'https://i.imgur.com/HLdMCD8.jpg',
    rating: 5,
  },
]
