import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  isSearchOpen = false;
  searchValue = '';


  constructor() { }

  ngOnInit() {
  }

  onSearchChangeValue(value: string) {
    this.isSearchOpen=true;
    this.searchValue = value;
    console.log(value)
    // this.service.searchMovie(this.searchValue);
  }

}
