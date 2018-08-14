import { Component, OnInit } from '@angular/core';
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
  private favorite: Favorite;


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
  }

  getFavoriteId(id: number) {
    this.movieService.getDetails(id)
      .subscribe(
        response => this.selectedMovie = response);
    console.log('to favorite id ' + id);
  }

  private addFavorite(id: number): void {
    this.favoriteService.addFavorite(id);
//      this.getFavoriteId(id);
//      this.check;
    console.log('addFavorite '+ id);
  }

  private removeFavorite(id: number): void {
    this.favoriteService.removeFavorite(id);
    console.log('removeFavorite ' + id);
  }

  public checkFavorite(id: number): void {
    let favId = this.favoriteService.checkFavorite(id);
    console.log('получение из сервиса ' + id);
    let thisId = this.movieService.getDetails(id);
    /*        console.log('получение из getDetails ' + id);
            if (favId == thisId){
              console.log('MUTCH ' + id);
            } else {
              console.log('ups have no id ' + this.selectedMovie.id);
           }  */  }
  /*      let favId = this.getFavoriteId(id);
          console.log(id);}
        let thatId = this.moviesService.getDetails(id);
          console.log(id)
        if favId(id) == thatId(){
          console.log(favId = thatId);
        } else {
          console.log('no mutch id');
        }
    }
  */
}
