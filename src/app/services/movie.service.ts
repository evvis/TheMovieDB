import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '98a73c4b9a44e0df3913985af185c09c';

  constructor(private http: Http) {
  }

  getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.http.get(moviesUrl)
     .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
      return body.results;
  }
}
