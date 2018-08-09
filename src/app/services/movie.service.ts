import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';
import * as _ from 'underscore';

@Injectable()
export class MovieService {
  private url = 'https://api.themoviedb.org/3/';
  private apiKey = '98a73c4b9a44e0df3913985af185c09c';

  constructor(
    private http: Http) {
  }

  public getMovies(searchValue?: string, page?: number): Observable<Movie[]> {
    let moviesUrl = `${this.url}movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;

    if (searchValue) {
      moviesUrl = `${this.url}search/movie?api_key=${this.apiKey}&language=en-US&query=${searchValue}&page=${page}`;
    }
    return this.getDataByUrl(moviesUrl);
  }

  private getDataByUrl(url: string): Observable<Movie[]>{
    return this.http.get(url)
      .map((res) => { return res.json() });
    // .map(this.extractData);
  }

  public getPager(page: number = 1, total_pages: number) {
    // calculate total pages
    let currentPage = page;
    let totalPages = total_pages;

    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    let pages = _.range(startPage, endPage + 1);
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    };
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //     return body.results;
  // }
}
