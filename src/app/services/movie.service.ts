import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';

@Injectable()
export class MovieService {
  private url = 'https://api.themoviedb.org/3/';
  private apiKey = '98a73c4b9a44e0df3913985af185c09c';

  constructor(
    private http: Http) {
  }

  public getMovies(searchValue?: string): Observable<Movie[]> {
    let moviesUrl = `${this.url}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    if (searchValue) {
      moviesUrl = `${this.url}search/movie?api_key=${this.apiKey}&language=en-US&query=${searchValue}&page=1`;
    }
    return this.getDataByUrl(moviesUrl);
  }

  private getDataByUrl(url: string): Observable<Movie[]>{
    return this.http.get(url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
      return body.results;
  }
}
