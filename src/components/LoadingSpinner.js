import React from 'react';

class LoadingSpinner extends React.Component {
    render() {
        return(
            <div>
                <i className="fa fa-spinner fa-spin" /> Loading...
            </div>
        )
    }
}

export default LoadingSpinner;