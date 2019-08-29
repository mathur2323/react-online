import React, { Component } from 'react'

class State extends Component {
    constructor(){
        super();
        this.state = {
          name:'Stateful Component'  
        }
    }

    render() {
        return (
            <div>
                <h1>A {this.state.name} with state</h1>
                <button>Update Name</button>
            </div>
        )
    }
}

export default State