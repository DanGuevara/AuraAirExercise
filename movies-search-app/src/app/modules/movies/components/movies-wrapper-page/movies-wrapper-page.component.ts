import {Component, OnInit} from '@angular/core';
import {MoviesSearchService} from '../../services/movies-search.service';
import {BehaviorSubject, Observable, combineLatest} from 'rxjs';
import {MovieSearchInfo} from '../../models/movie-search-info';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {MoviesSearchResult} from '../../models/movies-search-result';
import {PageEvent} from '@angular/material/paginator/paginator';

@Component({
  selector: 'app-movies-wrapper-page',
  templateUrl: './movies-wrapper-page.component.html',
  styleUrls: ['./movies-wrapper-page.component.scss']
})
export class MoviesWrapperPageComponent implements OnInit {

  public searchResults$: Observable<Array<MovieSearchInfo>>;
  private search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private page$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public resultLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private moviesSearchService: MoviesSearchService) {
    this.searchResults$ = combineLatest([this.search$, this.page$]).pipe(
      filter(([title, page]: [string, number]) => !!title && page > 0),
      switchMap(([title, page]: [string, number]) => {
        return this.moviesSearchService.searchMoviesByTitle(title, page);
      }),
      tap((result: MoviesSearchResult) => this.resultLength$.next(result.totalResults)),
      map((result: MoviesSearchResult) => result.search),
    );
  }

  ngOnInit(): void {
  }

  public onSearchUpdated(title: string): void {
    this.search$.next(title);
    this.page$.next(1);
  }

  public onPageUpdated(page: PageEvent): void {
    this.page$.next(page.pageIndex + 1);
  }

}
