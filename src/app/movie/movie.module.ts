import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  {path: '', component: MovieComponent},
  {path: ':id', component: MovieDetailComponent}
];

@NgModule({
  declarations: [MovieComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class MovieModule { }
