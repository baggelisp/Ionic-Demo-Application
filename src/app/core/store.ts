import { ActionReducerMap } from '@ngrx/store';
import { movieDetailsReducer } from '../pages/movie-details/movie-details.reducer';
import { moviesListReducer } from '../pages/movies-list/movies-list.reducer';

export const reducers: ActionReducerMap<any> = {
    moviesListReducer,
    movieDetailsReducer
}