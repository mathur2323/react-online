import React, { Component } from 'react'

class AnotherComponent extends Component {
    render() {
        // Object destructuring
        const { title, source } = this.props;
        // const title = this.props.title
        // const source = this.props.source
        // this.props.title = 'dfdsgsdgsdgdsg'
        return (
            <div>
                <h1>Props Component</h1>
                <p>{title} via {source}</p>
            </div>
        )
    }
}

export default AnotherComponent