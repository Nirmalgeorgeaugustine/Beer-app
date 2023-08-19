import {
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_SUCCESS,
  FETCH_CURRENT_PAGE,
} from '../Constants/constant';

//initial state
const initialState = {
  beers: [],
  currentPage: 1,
};

// reducer fucntion

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      console.log(action);
      return {
        ...state,
        beers: action.payload,
      };

    case FETCH_BEERS_FAILURE:
      return {
        ...state,
        beers: [],
      };

    case FETCH_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
