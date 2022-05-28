import { Movie } from "src/app/models/interfaces";

interface initialStateInt {
  currentPage: number,
  totalPages: number,
  totalResults: number,
  movies: Movie[],
}

const initialState: initialStateInt ={
  currentPage: 0,
  totalPages: 0,
  totalResults: 0,
  movies: [],
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function moviesListReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: [...payload.results],
        currentPage: payload.page - 1,
        totalPages: payload.total_pages,
        totalResults: payload.total_results
      }
    case 'SEARCH_CLEAN_STATE':
      return {
        ...initialState
      }
    default:
      return state;
  }

}