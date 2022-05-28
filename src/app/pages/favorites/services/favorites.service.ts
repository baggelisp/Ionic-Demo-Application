import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { Movie } from 'src/app/models/interfaces';
import { FavoritesApi } from './favorites.api';

@Injectable()
export class FavoritesService {
  public readonly movies$: Observable<Movie[]>;

  
  constructor(private store: Store<any>, private api: FavoritesApi) { 
    const state$ = store.select('favoritesReducer');
    this.movies$  = state$.pipe(select(state => state['movies']));

  }

  saveMovieToCollection(movieId: string) {
    return this.api.saveMovieToFavorites(movieId);
  }

  getMoviesData(movies: string[]) {
    const combineLatestObj: any = movies.reduce((initValue, currentVal) => ({ ...initValue, [currentVal]: this.api.getMovieDetails(currentVal)}), {}) 
    console.log(combineLatestObj)
    combineLatest(combineLatestObj).subscribe((data) => {
      console.log(data)
      this.store.dispatch({ type: `GET_FAVORITES_MOVIES_SUCCESS`, payload: [...Object.values(data)] }); 
    }, error => {
      alert("There was an error getting movies. Please try again later.");
      this.store.dispatch({ type: `FAVORITES_CLEAN_STATE`, payload: {}  }); 
    });
  }

  getFavorites(){
    return this.api.getFavorites();
  }

}
