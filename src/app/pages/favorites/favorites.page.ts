import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from './services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(public service: FavoritesService, private router: Router) { }

  ngOnInit() {
    const favoritesMoviesIds = this.getFavorites();
    console.log(favoritesMoviesIds)
    this.service.getMoviesData(favoritesMoviesIds);
  }

  getFavorites(){
    const favorites = this.service.getFavorites();
    return favorites;
  }

  onClickCard(movieId: number){
    this.router.navigate(['movie-details/' + movieId])
  }
}
