import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesService } from './services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  subscription: Subscription;

  constructor(public service: FavoritesService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const favoritesMoviesIds = this.getFavorites();
        this.service.getMoviesData(favoritesMoviesIds);
      }
  });
  }

  getFavorites(){
    const favorites = this.service.getFavorites();
    return favorites;
  }

  onClickCard(movieId: number){
    this.router.navigate(['movie-details/' + movieId])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
