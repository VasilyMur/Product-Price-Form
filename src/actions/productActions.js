export const LOADING_STARTS = 'LOADING_STARTS';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOADING_FAILS = 'LOADING_FAILS';

export const UPDATE_STARTS = 'UPDATE_STARTS';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILS = 'UPDATE_FAILS';

export const INPUT_NAME = 'INPUT_NAME';
export const INPUT_PRICE = 'INPUT_PRICE';


export function inputProductName(e) {
    return {
        type: INPUT_NAME, 
        text: e.target.value
    }
}

export function inputProductPrice(e) {
    return {
        type: INPUT_PRICE, 
        text: e.target.value
    }
}


export function loadingStarts() {
    return {
        type: LOADING_STARTS
    }
}

export function loadSuccess(res) {
    return {
        type: LOAD_SUCCESS, 
        products: res.data
    }
}

export function loadingFails(err) {
    return {
        type: LOADING_FAILS, 
        message: err.message
    }
}

export function updateStarts() {
    return {
        type: UPDATE_STARTS
    }
}

export function updateSuccess(res) {
    return {
        type: UPDATE_SUCCESS, 
        product: res.data
    }
}

export function updateFails(err) {
    return {
        type: UPDATE_FAILS, 
        message: err.message
    }
}