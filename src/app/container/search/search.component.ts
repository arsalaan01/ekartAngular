import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchText: string = '';

  // create an event to emit when the search is typed

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // emit the search text when the user types
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }
}
