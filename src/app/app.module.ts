import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const appRoutes: Routes = [
  {path: 'home', component: MovieListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'movie/:id', component: MovieDetailsComponent, pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    HeaderComponent,
    MovieListComponent,
    MovieCardComponent,
    PaginationComponent,
    MovieSearchComponent,
    AppComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
