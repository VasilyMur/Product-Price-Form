import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Product from './Product';

class Products extends React.Component {

    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        return(
            <div className="products">
                <h2>Products</h2>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => {
            axios.get('http://localhost:3001/products').then(res => {
                const action = { type: 'LOAD_SUCCESS', products: res.data };
                dispatch(action);
            }).catch(err => {
                console.log(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);