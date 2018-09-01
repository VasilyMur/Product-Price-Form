import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
            const action = { type: 'INPUT_NAME', text: e.target.value }
            dispatch(action)
        },
        inputPrice: (e) => {
            const action = { type: 'INPUT_PRICE', text: e.target.value }
            dispatch(action)
        },
        updateProduct: (e, name, price, id) => {
            e.preventDefault();
            //console.log('updating!!', name, price, id)
            const product = {name, price, id};
            axios.put(`http://localhost:3001/products/${id}`, product, {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => {
                const action = { type: 'UPDATE_SUCCESS', product: res.data }
                dispatch(action);
            }).catch(err => {
                console.log(err)
            });
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Popup);