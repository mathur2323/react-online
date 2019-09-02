import React, {Component} from 'react'
import { Consumer } from './Context';

class Mukesh extends Component{
    render(){
        return(
            <div>
                <Consumer>
                    {
                        (data)=><h1>Mukesh - {data[0]}</h1>
                    }
                </Consumer>
            </div>
        )
    }
}

export default Mukesh