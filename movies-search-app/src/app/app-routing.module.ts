import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesWrapperPageComponent} from './modules/movies/components/movies-wrapper-page/movies-wrapper-page.component';

const routes: Routes = [
  {path: '', component: MoviesWrapperPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
