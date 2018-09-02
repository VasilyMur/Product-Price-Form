import { createStore } from 'redux';

const initialState = {
    products: [],
    inputName: "",
    inputPrice: "",
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    console.log('Reducer: ', action)
    switch(action.type) {
        case 'LOADING_STARTS':
            return {...state, loading: true, error: false};
        case 'LOAD_SUCCESS':
            return {...state, products: action.products, loading: false };
        case 'LOADING_FAILS':
            return {...state, loading: false, error: action.message}
        case 'INPUT_NAME':
            return {...state, inputName: action.text}
        case 'INPUT_PRICE':
            return {...state, inputPrice: action.text}
        case 'UPDATE_STARTS':
            return {...state, loading: true, error: false}
        case 'UPDATE_SUCCESS':
            return {...state, products: [...state.products.slice(0, action.product.id), {...state.products[action.product.id], name: action.product.name, price: action.product.price}, ...state.products.slice(action.product.id + 1)], inputName: "", inputPrice: "", error: false, loading: false}
        case 'UPDATE_FAILS':
            return {...state, error: action.message, loading: false}
            default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
