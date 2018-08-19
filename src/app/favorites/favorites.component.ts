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
  favorite: Favorite[] = [];
  inFavorite: boolean;
  // inFavorite = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getFavoriteId(id);
        if (id) this.checkFavoriteId(id);
        console.log('getting id ' + id);
      });
    // this.checkFavoriteId(this.id);
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

  // public checkFavoriteId()  {
  //   let favoritesId = this.inFavorite;
  //   this.inFavorite = this.favoriteService.checkFavoriteId();
  //   // console.log(this.favorite);
  //   // this.inFavorite = favoritesId.some((favorite) => favorite.id !== id);
  //   // console.log(favoritesId);
  //   console.log(this.inFavorite);
  //   return this.inFavorite;

  public checkFavoriteId(id: number)  {
    let favorite = this.favorite;
    // this.favoriteService.checkFavoriteId(id);
    this.favorite = this.favoriteService.checkFavoriteId(id);
    console.log(this.favorite);
    if (this.inFavorite = favorite.some((favorite) => favorite.id === id)) {
      console.log(this.inFavorite);
      return this.inFavorite;
    } else {
      console.log(this.inFavorite);
      return this.inFavorite;
    }
    // return this.inFavorite;
    // console.log(this.inFavorite);

    // if (favoritesId.filter((favorite) => favorite.id !== id)) {
    //   console.log(this.inFavorite);
    //   return this.inFavorite = true;
    // } else {
    //   return this.inFavorite = false;
    // }
    // return favoritesId;
    }
  }
