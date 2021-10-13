import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesWrapperPageComponent} from './modules/movies/components/movies-wrapper-page/movies-wrapper-page.component';
import {MovieFullInfoComponent} from './modules/movies/components/movie-full-info/movie-full-info.component';

const routes: Routes = [
  {path: '', component: MoviesWrapperPageComponent},
  {path: 'movie/:id', component: MovieFullInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
