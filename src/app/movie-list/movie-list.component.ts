import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MovieService} from '../services/movie.service';
import {Movie} from '../services/movie';
// import * as _ from 'underscore';


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
  searchValue: string;
  // pager: any = {};

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
    // this.setPage(this.page, this.total_pages);
  }

  public getMovies() {
    this.movieService.getMovies(this.searchValue, this.page)
      .subscribe(
        response => {
          this.movieList = response['results'];
          this.total_pages = response['total_pages'];
          this.page = response['page'];
          this.total_results = response['total_results'];
        });
  }

  public setPage(page: number){
    this.page = page;
    this.getMovies();
  }

  public setSearchValue(searchValue: string){
    this.page = 1;
    this.searchValue = searchValue;
    this.getMovies();
  }

  // setPage(page: number, total_pages: number) {
  //   if (page < 1 || page > this.pager.totalPages) {
  //     return;
  //   }
  //   this.pager = this.getPager(page, total_pages);
  //   this.getMovies();
  //     console.log(this.pager);
  // }
  // getPager(page: number = 1, total_pages: number){
  //   let currentPage = page;
  //   let totalPages = total_pages;
  //
  //   let startPage: number, endPage: number;
  //
  //   if (totalPages <= 5) {
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else {
  //     if (currentPage <= 3) {
  //       startPage = 1;
  //       endPage = 5;
  //     } else if (currentPage + 1 >= totalPages) {
  //       startPage = totalPages - 4;
  //       endPage = totalPages;
  //     } else {
  //       startPage = currentPage - 2;
  //       endPage = currentPage + 2;
  //     }
  //   }
  //   let pages = _.range(startPage, endPage + 1);
  //   return {
  //     currentPage: currentPage,
  //     totalPages: totalPages,
  //     startPage: startPage,
  //     endPage: endPage,
  //     pages: pages
  //   };
  // }
}
