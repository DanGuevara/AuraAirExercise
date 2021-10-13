import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesSearchBarComponent} from './components/movies-search-bar/movies-search-bar.component';
import {MoviesWrapperPageComponent} from './components/movies-wrapper-page/movies-wrapper-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MoviesSearchBarComponent,
    MoviesWrapperPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
  ]
})
export class MoviesModule {
}
