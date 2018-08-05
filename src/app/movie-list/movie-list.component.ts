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
  page: number;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.getMovies(this.page);
  }

  getMovies(page: number) {
    this.movieService.getMovies(page)
      .subscribe(
        response => {
          this.movieList = response;
          console.log(page);
        });
  }

  searchMovie(searchValue: string){
    this.movieService.searchMovie(searchValue)
      .subscribe(
        response => {
          this.movieList = response;
        });
  }
}
