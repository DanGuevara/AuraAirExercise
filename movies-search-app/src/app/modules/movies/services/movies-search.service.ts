import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IMoviesSearchResult, MoviesSearchResult} from '../models/movies-search-result';

const API_KEY = 'dc8624c9';
const END_POINT = 'http://www.omdbapi.com/';

@Injectable({
  providedIn: 'root'
})
export class MoviesSearchService {
  constructor(private httpClient: HttpClient) {
  }

  public searchMoviesByTitle(title: string): Observable<MoviesSearchResult> {
    return this.httpClient.get<IMoviesSearchResult>(END_POINT, {
      params: {
        s: title,
        apikey: API_KEY,
      }
    }).pipe(
      map((result: IMoviesSearchResult) => new MoviesSearchResult(result)),
    );
  }
}
