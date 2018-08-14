import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../services/movie';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie-recommendations',
  templateUrl: './movie-recommendations.component.html',
  styleUrls: ['./movie-recommendations.component.css']
})
export class MovieRecommendationsComponent implements OnInit {

  recommendedMovie: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getRecommend(id);
      });
  }

  public getRecommend(id: number) {
    this.movieService.getRecommendations(id)
      .subscribe(response => {
        this.recommendedMovie = response['results'];
      });
  }

}
