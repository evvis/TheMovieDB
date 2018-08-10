import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../services/movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];
  page: number;
  searchValue: string;
  totalPages: number;
  totalResults: number;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies() {
    this.movieService.getMovies(this.searchValue, this.page)
      .subscribe(
        response => {
          this.movieList = response['results'];
          this.totalPages = response['total_pages'];
          this.page = response['page'];
          this.totalResults = response['total_results'];
        });
  }

  public setPage(page: number) {
    this.page = page;
    this.getMovies();
  }

  public setSearchValue(searchValue: string) {
    this.page = 1;
    this.searchValue = searchValue;
    this.getMovies();
  }
}
