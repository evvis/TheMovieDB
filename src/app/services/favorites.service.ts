import {Injectable} from '@angular/core';
import {Favorite} from './favorites';

@Injectable()
export class FavoriteService {

  private favorite: Favorite[];
  private id: number;
  check: boolean;

  constructor() {
    let favorite = this.getFavorites();
  }

  public addFavorite(id: number): void {
    let favorite = new Favorite(id);
    let favorites = this.getFavorites();
    favorites = favorites.filter((favorites)=> favorites.id != id);
    favorites.push(favorite);
    console.log(id);
    this.check = true;
    console.log(this.check);

    this.setLocalStorageFavorites(favorites);
    console.log('push to local storage id ' + id);
  }

  public getFavorites(): Favorite[] {
    let localStorageItem = JSON.parse(localStorage.getItem('favorite'));
    return localStorageItem == null ? [] : localStorageItem.favorite;
  }

  public removeFavorite(id: number): void {
    let favorite = this.getFavorites();
    favorite = favorite.filter((favorite) => favorite.id != id);
    this.setLocalStorageFavorites(favorite);
  }

  private setLocalStorageFavorites(favorites: Favorite[]): void {
    localStorage.setItem('favorite', JSON.stringify({favorite: favorites}));
  }

  public checkFavorite(id: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter((favorites)=> favorites.id != id);
    this.checkFavorite(id);
  }
}
