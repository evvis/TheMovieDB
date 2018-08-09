import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MovieService} from '../services/movie.service';
import {Movie} from '../services/movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];
  total_pages: number;
  page: number;
  total_results: number;
  pager: any = {};

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.getMovies();
    this.setPage(1);
  }

  getMovies(searchValue?: string, page: number = 1) {
    this.movieService.getMovies(searchValue)
      .subscribe(
        response => {
          this.movieList = response['results'];
          this.total_pages = response['total_pages'];
          this.page = response['page'];
          this.total_results = response['total_results'];
        });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.movieService.getPager(this.page, this.total_pages);
  }
}
