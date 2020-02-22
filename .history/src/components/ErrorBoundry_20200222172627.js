import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    render() {
        if(this.state.hasError) {
            return <h1>Opps. Something went wrong</h1>
        }
        return 
    }
}

export default ErrorBoundry;