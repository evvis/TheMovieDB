import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor() { }

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }
  onChange(event: Event){
    this.searchValue.emit((event.target as HTMLInputElement).value);
  }
}

