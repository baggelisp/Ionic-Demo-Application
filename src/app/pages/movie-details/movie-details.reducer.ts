import { MovieDetails } from "src/app/models/interfaces";

interface initialStateInt {
  movie: MovieDetails | any,
}

const initialState: initialStateInt ={
  movie: {},
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function movieDetailsReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        movie: {...payload},
      }
    case 'MOVIE_CLEAN_STATE':
      return {
        ...initialState
      }
    default:
      return state;
  }

}