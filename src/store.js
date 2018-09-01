import { createStore } from 'redux';

const initialState = {
    products: [],
    inputName: "",
    inputPrice: "",
};

const reducer = (state = initialState, action) => {
    console.log('Reducer: ', action)
    switch(action.type) {
        case 'LOAD_SUCCESS':
            return {...state, products: action.products};
        case 'INPUT_NAME':
            return {...state, inputName: action.text}
        case 'INPUT_PRICE':
            return {...state, inputPrice: action.text}
        case 'UPDATE_SUCCESS':
            return {...state, products: [...state.products.slice(0, action.product.id), {...state.products[action.product.id], name: action.product.name, price: action.product.price}, ...state.products.slice(action.product.id + 1)], inputName: "", inputPrice: ""}
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
