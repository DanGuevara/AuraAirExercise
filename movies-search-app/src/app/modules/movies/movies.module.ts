import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesSearchBarComponent} from './components/movies-search-bar/movies-search-bar.component';
import {MoviesWrapperPageComponent} from './components/movies-wrapper-page/movies-wrapper-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MatCardModule} from '@angular/material/card';
import { MovieFullInfoComponent } from './components/movie-full-info/movie-full-info.component';


@NgModule({
  declarations: [
    MoviesSearchBarComponent,
    MoviesWrapperPageComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieFullInfoComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class MoviesModule {
}
