import axios from 'axios';
import {
    loadingStarts,
    loadSuccess,
    loadingFails,
    updateStarts,
    updateSuccess,
    updateFails
} from './actions/productActions';


export function apiLoad(dispatch) {
    dispatch(loadingStarts());
    axios.get('http://localhost:3001/products').then(res => {
        setTimeout(() => {
            dispatch(loadSuccess(res));
        }, 1000)
    }).catch(err => {
            dispatch(loadingFails(err));
    })
}

export function apiUpdate(dispatch, name, price, id) {
    dispatch(updateStarts());

    const product = {name, price, id};
    axios.put(`http://localhost:3001/products/${id}`, product, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        dispatch(updateSuccess(res));
    }).catch(err => {
        dispatch(updateFails(err));
    });
}