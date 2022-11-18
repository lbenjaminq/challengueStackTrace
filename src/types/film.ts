export interface FilmPeople {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
}

export interface DataFilm {
  film: FilmPeople;
  isLoading: boolean;
  isError: boolean;
}
