import { createStore, applyMiddleware } from 'redux';
import { beerReducer } from '../Redux/reducer';
import thunk from 'redux-thunk';

const Store = createStore(beerReducer, applyMiddleware(thunk));
export default Store;
