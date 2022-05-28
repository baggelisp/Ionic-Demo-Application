import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/interfaces';
import { MoviesListApi } from './movies-list.api';

@Injectable()
export class MoviesListService {
  public readonly movies$: Observable<Movie[]>;
  public readonly currentPage$: Observable<number>;
  public readonly totalPages$: Observable<number>;
  public readonly totalResults$: Observable<number>;
  

  
  constructor(private store: Store<any>, private api: MoviesListApi) { 
    const state$ = store.select('moviesListReducer');
    this.movies$  = state$.pipe(select(state => state['movies']));
    this.currentPage$  = state$.pipe(select(state => state['currentPage']));
    this.totalPages$  = state$.pipe(select(state => state['totalPages']));
    this.totalResults$  = state$.pipe(select(state => state['totalResults']));

  }

  getPopularMovies(page=1) {
    this.api.getPopularMovies(page).subscribe( response => {
      this.store.dispatch({ type: `GET_MOVIES_SUCCESS`, payload: {...response}  }); 
    }, error => {
      alert("There was an error getting movies. Please try again later.");
      this.store.dispatch({ type: `SEARCH_CLEAN_STATE`, payload: {}  }); 
    });
	}

	searchMovie(query: string, page=1){
    this.api.searchMovie(query, page).subscribe( response => {
      this.store.dispatch({ type: `GET_MOVIES_SUCCESS`, payload: {...response}  }); 
    }, error => {
      alert("There was an error getting movies. Please try again later.");
      this.store.dispatch({ type: `SEARCH_CLEAN_STATE`, payload: {}  }); 

    });
  }
}
