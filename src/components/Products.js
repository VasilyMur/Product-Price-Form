import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Product from './Product';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';

class Products extends React.Component {

    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        return(
            <div className="products">
                <h2>Products</h2>
                {this.props.loading ? <LoadingSpinner/> : ''}
                {this.props.error ? <Error message={this.props.error}/> : ''}
                <ul>
                    {this.props.products ? this.props.products.map((res, i) => {
                        return  <Product    key={i} 
                                                    name={res.name} 
                                                    price={res.price} 
                                                    index={i}
                                                    store={this.props.store}
                                                />
                    }) : ''}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => {
            const action = { type: 'LOADING_STARTS' }
                dispatch(action);
            axios.get('http://localhost:3001/products').then(res => {
                const action = { type: 'LOAD_SUCCESS', products: res.data };
                setTimeout(() => {
                    dispatch(action);
                }, 1000)
            }).catch(err => {
                const action = { type: 'LOADING_FAILS', message: err.message }
                    dispatch(action);
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);