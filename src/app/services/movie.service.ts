import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  private url = 'https://api.themoviedb.org/3/';
  private apiKey = '98a73c4b9a44e0df3913985af185c09c';

  constructor(
    private http: Http) {
  }

  public getMovies() {
    let moviesUrl = `${this.url}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.http.get(moviesUrl)
     .map(this.extractData);
  }

  public searchMovie(searchValue: string) {
    let searchUrl = `${this.url}search/movie?api_key=${this.apiKey}&language=en-US&query=${searchValue}&page=1`;

    return this.http.get(searchUrl)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
      return body.results;
  }
}
