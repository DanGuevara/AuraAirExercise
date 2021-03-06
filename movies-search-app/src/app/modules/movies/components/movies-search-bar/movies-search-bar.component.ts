import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-movies-search-bar',
  templateUrl: './movies-search-bar.component.html',
  styleUrls: ['./movies-search-bar.component.scss']
})
export class MoviesSearchBarComponent implements OnInit {

  @Output()
  public searchUpdated: EventEmitter<string> = new EventEmitter<string>();

  public title: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSearchClick(): void {
    this.searchUpdated.emit(this.title.value);
  }

  public clear(): void {
    this.title.reset();
  }

}
