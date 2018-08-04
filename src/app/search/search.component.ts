import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  onChange(event: Event) {
    this.search.emit((event.target as HTMLInputElement).value);
  }

}
