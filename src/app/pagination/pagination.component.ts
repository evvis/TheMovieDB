import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Movie } from "../services/movie";
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  public movie: Movie;

  constructor() { }

  @Output()
  public pageChange: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }
  onChange(event: Event){
    this.pageChange.emit((event.target as HTMLInputElement).value);
  }

}
