import {Component, Input, OnInit} from '@angular/core';
import {MovieSearchInfo} from '../../models/movie-search-info';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  public movie: MovieSearchInfo | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
