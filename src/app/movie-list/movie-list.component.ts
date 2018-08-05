import {Component, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
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
    this.movieService.getMovies()
      .subscribe(
        response => {
          this.movieList = response;
        });
  }

  searchMovie(searchValue: string){
    this.movieService.searchMovie(searchValue)
      .subscribe(
        response => {
          this.movieList = response;
        });
    console.log(searchValue);
  }
}
