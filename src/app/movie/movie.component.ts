import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {FormBuilder} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {MovieModel} from '../models/movie-model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: [MovieModel];
  searchForm = this.fb.group({
      title: null
    }
  );

  constructor(private movieService: MovieService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchMovie('bo gia');
    this.searchForm.valueChanges.subscribe(
      value => this.searchMovie(value.title)
    );
  }

  private searchMovie(title: string): void {
    if (title.length < 3) {
      return;
    }
    this.movieService.searchMovie(title).subscribe(
      value => this.movies = value.titles,
      error => console.log(error)
    );
  }
}
