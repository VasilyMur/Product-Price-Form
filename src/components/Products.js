import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';

import { apiLoad } from '../api';

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
            apiLoad(dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);