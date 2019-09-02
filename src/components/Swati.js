import React, { Component } from 'react'
import Mukesh from './Mukesh';
import { Consumer } from './Context';
class Swati extends Component {
    render() {
        return (
            <div>
                <h1>Swati</h1>
                <Mukesh />
<Consumer>
    {
        (data) => <button onClick={data[1]}>Gutka badlo</button>
    }
</Consumer>
                
            </div>
        )
    }
}

export default Swati
