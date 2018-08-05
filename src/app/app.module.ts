import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
