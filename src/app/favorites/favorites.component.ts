import {Component, OnInit} from '@angular/core';
import { Movie } from '../services/movie';
import { Favorite } from '../services/favorites';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  selectedMovie: Movie;
  id: number;
  favorite: Favorite [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getFavoriteId(id);
        console.log('getting id ' + id);
      });
    this.checkFavoriteId();
  }

  getFavoriteId(id: number) {
    this.movieService.getDetails(id)
      .subscribe(
        response => this.selectedMovie = response);
  }

  private addFavorite(id: number) {
    this.favoriteService.addFavorite(id);
  }

  private removeFavorite(id: number): void {
    this.favoriteService.removeFavorite(id);
  }

  public checkFavoriteId() {
    let favoritesId = this.favorite;
    this.favorite = this.favoriteService.checkFavoriteId();
    console.log(this.favorite);
    return favoritesId;
  }
}
