import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/models/interfaces';
import { MovieDetailsApi } from './movie-details.api';

@Injectable()
export class MovieDetailsService {
  public readonly movie$: Observable<MovieDetails>;

  
  constructor(private store: Store<any>, 
    private api: MovieDetailsApi) { 
      const state$ = store.select('movieDetailsReducer');
      this.movie$  = state$.pipe(select(state => state['movie']));
    }


  getMovie(movieId: number) {
    this.api.getMovieDetails(movieId).subscribe( response => {
      this.store.dispatch({ type: `GET_MOVIE_SUCCESS`, payload: {...response}  }); 
    }, error => {
      alert("There was an error getting movies. Please try again later.");
      this.store.dispatch({ type: `MOVIE_CLEAN_STATE`, payload: {}  }); 
    });
	}


}
