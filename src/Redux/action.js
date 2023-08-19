import axios from 'axios';
import {
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_SUCCESS,
  FETCH_CURRENT_PAGE,
} from '../Constants/constant';

//API to get List
const URL = 'https://api.punkapi.com/v2/beers';

//get beers
export const fetchBeers = (page = 1) => {
  const url = `${URL}?page=${page}&per_page=10`;
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      dispatch({
        type: FETCH_BEERS_SUCCESS,
        payload: response.data,
      });
      dispatch({
        type: FETCH_CURRENT_PAGE,
        payload: page,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BEERS_FAILURE,
        payload: error.message,
      });
    }
  };
};
