import { createStore } from 'redux';
import reducer from './reducers/productReducer';

const store = createStore(reducer);

export default store;
