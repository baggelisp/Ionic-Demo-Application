import { Injectable } from '@angular/core';

const FAVORITES_KYE = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public favoritesMovies = [];

  constructor() {
    
  }

  saveMovieToFavorites(movieId: string) {
    const favs = this.getFavorites();
    if (favs.includes(movieId)) return;
    favs.push(movieId);
    if (localStorage) {
      localStorage.setItem(FAVORITES_KYE, JSON.stringify(favs));
    }
    this.favoritesMovies = [...favs];
  }

  removeFromFavorites(movieId: string) {
    const favs = this.getFavorites();
    const removed = favs.filter( el => el != movieId);
    if (localStorage) {
      localStorage.setItem(FAVORITES_KYE, JSON.stringify(removed));
    }
    this.favoritesMovies = [...removed];
  }

  getFavorites() {
    if (localStorage) {
      this.favoritesMovies = JSON.parse(localStorage.getItem(FAVORITES_KYE) || '[]');
    }
    return this.favoritesMovies;
  }

}