import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesListService } from './services/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  isSearchOpen = false;
  searchValue = '';


  constructor(private router: Router, public service: MoviesListService) { }

  ngOnInit() {
    this.service.getPopularMovies();
  }

  onSearchChangeValue(value: string) {
    this.isSearchOpen=true;
    this.searchValue = value;
    if (!this.searchValue) {
      this.service.getPopularMovies();
      this.isSearchOpen=false;
      return;
    }
    this.service.searchMovie(this.searchValue);
  }

  onClickCard(movieId: number){
    this.router.navigate(['movie-details/' + movieId])

  }

}
