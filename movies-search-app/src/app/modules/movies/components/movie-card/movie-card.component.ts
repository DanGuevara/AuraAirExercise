import {Component, Input, OnInit} from '@angular/core';
import {MovieSearchInfo} from '../../models/movie-search-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  public movie: MovieSearchInfo | null = null;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onCardClick(): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/movie/${this.movie?.imdbID}`])
    );
    window.open(url, '_blank');
  }
}
