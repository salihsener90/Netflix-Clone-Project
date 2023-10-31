import { actionsTypes } from "../actions/ActionsTypes";

const initialState = {
  populerMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    //filmleri state e aktarma
    case actionsTypes.SET_MOVIES:
      return {
        ...state,
        populerMovies: action.payload,
        isLoading: false,
      };
      case actionsTypes.SET_CATEGORIES:
        return {
          ...state,
          genres:action.payload
        }
    default:
      return state;
  }
};
