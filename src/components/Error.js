import React from 'react';

class Error extends React.Component {
    render() {
        return(
            <h2>Error: '{this.props.message}'</h2>
        )
    }
}

export default Error;