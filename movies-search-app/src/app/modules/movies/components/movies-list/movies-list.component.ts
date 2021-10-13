import {Component, Input, OnInit} from '@angular/core';
import {MovieSearchInfo} from '../../models/movie-search-info';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input()
  public movies: Array<MovieSearchInfo> | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
