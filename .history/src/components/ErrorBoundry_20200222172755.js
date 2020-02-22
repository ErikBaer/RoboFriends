import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this
    }

    render() {
        if(this.state.hasError) {
            return <h1>Opps. Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;