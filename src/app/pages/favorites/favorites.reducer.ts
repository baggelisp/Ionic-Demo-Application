import { Movie } from "src/app/models/interfaces";

interface initialStateInt {
  movies: Movie[],
}

const initialState: initialStateInt ={
  movies: [],
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function favoritesReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'GET_FAVORITES_MOVIES_SUCCESS':
      return {
        ...state,
        movies: [...payload],
      }
    case 'FAVORITES_CLEAN_STATE':
      return {
        ...initialState
      }
    default:
      return state;
  }

}