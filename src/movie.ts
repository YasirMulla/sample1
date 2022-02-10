export interface Movie {
  id: string;
  movieName: string;
  price: number;
  description: string;
  starring: string[];
  runTime: number;
  slug: string;
  //imageUrl: string;
}

export const movies: Movie[] = [
  {
    id: '1ABAS',
    movieName: 'SPIDER-MAN: NO WAY HOME',
    price: 799,
    description: 'A spectacular adventure',
    starring: [
      'Tom Holland',
      'Zendaya',
      'Benedict Cumberbatch',
      'Jon Favreau',
      'Jacob Batalon',
      'Marisa Tomei',
    ],
    runTime: 6666,
    slug: 'spider-man-no-way-home',
  },
  {
    id: '2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    movieName: 'MATRIX: RESSURECTIONS',
    price: 699,
    description: 'A great homage to the trilogy',
    starring: [
      'Tom Holland',
      'Zendaya',
      'Benedict Cumberbatch',
      'Jon Favreau',
      'Jacob Batalon',
      'Marisa Tomei',
    ],
    runTime: 999,
    slug: 'MATRIX-RESSURECTIONS',
  },
];
