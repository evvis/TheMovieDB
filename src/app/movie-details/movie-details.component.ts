import { Component, OnInit } from '@angular/core';
import {Movie} from '../services/movie';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  selectedMovie: Movie;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        if (id) this.getDetails(id);
      });
  }

  public getDetails(id: string) {
    this.movieService.getMovies(id)
      .subscribe(
        response => {
          this.selectedMovie = response['results'];
        });
    // this.movieService.getMovies(this.id)
    //   .subscribe(
    //     response => this.selectedMovie = response);
    //     console.log(id);
  }

}
