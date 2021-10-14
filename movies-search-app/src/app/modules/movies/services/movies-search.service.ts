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

  public searchMoviesByTitle(title: string, page: number = 0): Observable<MoviesSearchResult> {
    return this.httpClient.get<IMoviesSearchResult>(END_POINT, {
      params: {
        s: title,
        apikey: API_KEY,
        page: page > 0 ? page.toString() : '1',
      }
    }).pipe(
      map((result: IMoviesSearchResult) => new MoviesSearchResult(result)),
    );
  }

  public getMovieByID(id: string): Observable<any> {
    return this.httpClient.get<any>(END_POINT, {
      params: {
        i: id,
        apikey: API_KEY,
        plot: 'full',
      }
    });
  }
}
