import React from 'react';
import Popup from './Popup';


class Product extends React.Component {

    state = {
        openPopup: false
    }

    componentDidUpdate(prevProps) {
        if(prevProps.name !== this.props.name || prevProps.price !== this.props.price) {
            this.openPopup()
        }
    }

    openPopup = () => {
        const openPopup = this.state.openPopup;
        this.setState({ openPopup: !openPopup });
    }

    render() {
        return(
            <React.Fragment>
                <li>{this.props.name} - {this.props.price} <button onClick={this.openPopup}>Change</button></li>
                {this.state.openPopup ? <Popup openPopup={this.openPopup} id={this.props.index} store={this.props.store}/> : ''}
            </React.Fragment>
        )
    }
}

export default Product;