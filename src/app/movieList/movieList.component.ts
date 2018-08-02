import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MovieService} from '../services/movie.service';
//import {Movie} from '../services/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Observable<Movie[]>;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieList = this.movieService.getMovies();
  }
}
