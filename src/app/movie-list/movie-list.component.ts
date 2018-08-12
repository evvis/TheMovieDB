import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../services/movie';
import {Router} from "@angular/router";


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

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) {
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

  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }
}
