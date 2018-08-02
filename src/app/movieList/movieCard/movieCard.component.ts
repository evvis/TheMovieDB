import {Component, Input, OnInit} from '@angular/core';
//import {Movie} from '../../services/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movieCard.component.html',
  styleUrls: ['./movieCard.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  public movie: Movie;

  constructor( ) {
  }

  ngOnInit() {
  }




}
