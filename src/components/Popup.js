import React from 'react';
import { connect } from 'react-redux';
import { apiUpdate } from '../api';
import { inputProductName, inputProductPrice } from '../actions/productActions';

class Popup extends React.Component {

    render() {
        return(
            <div className="form-modal">
                <form name="myForm" onSubmit={(e) => this.props.updateProduct(e, this.props.newName, this.props.newPrice, this.props.id)}>
                    <input value={this.props.newName} placeholder="New name..." onChange={this.props.inputName}/>
                    <input value={this.props.newPrice} placeholder="New price..." onChange={this.props.inputPrice}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newName: state.inputName,
        newPrice: state.inputPrice
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        inputName: (e) => {
            dispatch(inputProductName(e));
        },
        inputPrice: (e) => {
            dispatch(inputProductPrice(e))
        },
        updateProduct: (e, name, price, id) => {
            e.preventDefault();
            apiUpdate(dispatch, name, price, id);
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Popup);