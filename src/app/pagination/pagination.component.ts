import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pager: any = {};
  @Input() total_pages: number;
  @Input() page: number;

  constructor() { }

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.setPage(event, this.page, this.total_pages);
      console.log(this.page);
  }

  setPage(event: Event, page: number, total_pages: number) {
    this.pageChange.emit(page);

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.getPager(page, total_pages);
      console.log(this.pager);
  }
  getPager(page: number = 1, total_pages: number){
    let currentPage = page;
    let totalPages = total_pages;

    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    let pages = _.range(startPage, endPage + 1);
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    };
  }

}
