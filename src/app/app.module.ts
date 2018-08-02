import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movieList/movieList.component';
import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './movieList/movieCard/movieCard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
