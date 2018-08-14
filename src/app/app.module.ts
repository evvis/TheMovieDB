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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'home', component: MovieListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'movie/:id', component: MovieDetailsComponent, pathMatch: 'prefix' },
  { path: '**', component: PageNotFoundComponent },
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
    PageNotFoundComponent,
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
