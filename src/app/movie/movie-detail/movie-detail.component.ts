import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {log} from 'util';
import {MovieModel} from '../../models/movie-model';
import {MovieComponent} from '../movie.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieModel: MovieModel;
  isNotFound = false;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.route.snapshot.params.id).subscribe(
      value => {
        if (value.title.length) {
          this.movieModel = value;
        }
        this.isNotFound = !this.movieModel;
      },
      error => console.log(error)
    );
  }

}
