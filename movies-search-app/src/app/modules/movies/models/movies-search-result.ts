import {IMovieSearchInfo, MovieSearchInfo} from './movie-search-info';

export interface IMoviesSearchResult {
  Search: Array<IMovieSearchInfo>;
  Response: boolean;
  totalResults: string;
}

export class MoviesSearchResult {
  public readonly search: Array<MovieSearchInfo>;
  public readonly response: boolean;
  public readonly totalResults: number;

  constructor(data: IMoviesSearchResult) {
    this.search = data.Search.map((item) => new MovieSearchInfo(item));
    this.response = data.Response;
    this.totalResults = Number(data.totalResults);
  }
}


