import {Component, OnInit} from '@angular/core';
import {MoviesSearchService} from '../../services/movies-search.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {MovieSearchInfo} from '../../models/movie-search-info';
import {filter, map, switchMap} from 'rxjs/operators';
import {MoviesSearchResult} from '../../models/movies-search-result';

@Component({
  selector: 'app-movies-wrapper-page',
  templateUrl: './movies-wrapper-page.component.html',
  styleUrls: ['./movies-wrapper-page.component.scss']
})
export class MoviesWrapperPageComponent implements OnInit {

  public searchResults$: Observable<Array<MovieSearchInfo>>;
  private search$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private moviesSearchService: MoviesSearchService) {
    this.searchResults$ = this.search$.pipe(
      filter((title) => !!title),
      switchMap((title: string) => {
        return this.moviesSearchService.searchMoviesByTitle(title);
      }),
      map((result: MoviesSearchResult) => result.search)
    );
  }

  ngOnInit(): void {
  }

  public onSearchUpdated(title: string): void {
    this.search$.next(title);
  }

}
