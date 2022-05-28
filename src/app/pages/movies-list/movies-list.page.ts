import { Component, OnInit } from '@angular/core';
import { MoviesListService } from './services/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  isSearchOpen = false;
  searchValue = '';


  constructor(public service: MoviesListService) { }

  ngOnInit() {
    this.service.getPopularMovies();
  }

  onSearchChangeValue(value: string) {
    this.isSearchOpen=true;
    this.searchValue = value;
  }

  onClickCard(movieId: number){

  }

}
