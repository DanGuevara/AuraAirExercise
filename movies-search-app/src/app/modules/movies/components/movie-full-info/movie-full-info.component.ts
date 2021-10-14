import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, switchMap, tap} from 'rxjs/operators';
import {MoviesSearchService} from '../../services/movies-search.service';

@Component({
  selector: 'app-movie-full-info',
  templateUrl: './movie-full-info.component.html',
  styleUrls: ['./movie-full-info.component.scss']
})
export class MovieFullInfoComponent implements OnInit {

  public movieFullInfo$: Observable<any>;
  private movieId$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private router: Router,
    private movieSearchService: MoviesSearchService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.movieFullInfo$ = this.movieId$.pipe(
      filter((id: string) => !!id),
      switchMap((id: string) => this.movieSearchService.getMovieByID(id)),
      tap((result) => console.log(result)),
    );

    this.activatedRoute.params.subscribe((params) => {
      this.movieId$.next(params?.id);
    });
  }

  ngOnInit(): void {
  }

  public getObjectKeys(object: any): Array<string> {
    const excludedKeys: Array<string> = ['Plot', 'Poster', 'Ratings', 'Response', 'imdbID'];
    return object ? Object.keys(object).filter((key) => !excludedKeys.includes(key)) : [];
  }

  public getImageUrl(url: string): string {
    try {
      const result = new URL(url);
    } catch (err) {
      return '/assets/noImageAvailable.jpg';
    }

    return url;
  }
}
