import { Injectable } from '@angular/core';
import { Favorite } from './favorites';

@Injectable()
export class FavoriteService {

  private favorite: Favorite [];
  private id: number;
  // private inFavorite: Favorite[];
  public inFavorite: boolean;

  constructor() {
  }

// Добавление в LocalStorage

  public addFavorite(id: number): void {
    let favorite = new Favorite(id);
    let favorites = this.getFavorites();
    favorites = favorites.filter((favorites) => favorites.id !== id);
    favorites.push(favorite);
    console.log(id);

    this.setLocalStorageFavorites(favorites);
  }

// Получение массива избранного

  public getFavorites(): Favorite[] {
    let localStorageItem = JSON.parse(localStorage.getItem('favorite'));
    // console.log(JSON.parse(localStorage.getItem('favorite')));
    return localStorageItem == null ? [] : localStorageItem.favorite;
  }

// Удаление элемента

  public removeFavorite(id: number): void {
    let favorite = this.getFavorites();
    favorite = favorite.filter((favorite) => favorite.id !== id);
    this.setLocalStorageFavorites(favorite);
  }

// Помещение в LocalStorage

  private setLocalStorageFavorites(favorite: Favorite[]): void {
    localStorage.setItem('favorite', JSON.stringify({favorite: favorite}));

  }

  // public checkFavoriteId() {
  //   let favorite = JSON.parse(localStorage.getItem('favorite'));
  //   favorite = favorite.some((favorite) => favorite.id !== this.id);
  //   console.log(this.inFavorite);
  //   return this.inFavorite;
  // }

  public checkFavoriteId( id: number) {
    let favorite = JSON.parse(localStorage.getItem('favorite'));
    return favorite;
  }
//     favorite.some((favorite) => favorite.id !== id);
//     console.log(this.inFavorite);
//     return this.inFavorite;
// }

  // public checkFavoriteId(id: number): Favorite[] {
  //   let infavorite = JSON.parse(localStorage.getItem('favorite'));
  //   infavorite = infavorite.filter((favorite) => favorite.id !== id);
  //   infavorite.push(this.infavorite);
  //   return infavorite;
  // }
}
