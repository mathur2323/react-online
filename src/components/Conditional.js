// Conditional Rendering

import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }


    // signin = ()=>{
    //     this.setState({
    //         isLoggedIn:true
    //     })
    // }

    // signout = ()=>{
    //     this.setState({
    //         isLoggedIn:false
    //     })
    // }

    toggleLoggedInState = () => this.setState({isLoggedIn:!this.state.isLoggedIn})

    render() {
        // Method 6 (Short circuit)
        return this.state.isLoggedIn && <h1>Home</h1>

        // Method 5
        // return(
        //     <div>
        //         <h1>{this.state.isLoggedIn ? 'Home' : 'Login'}</h1>
        //         <button onClick={this.toggleLoggedInState}>{this.state.isLoggedIn ? 'Logout' : 'Login' }</button>
        //     </div>
        // )

        // Method 4
        // return(
        //     <div>
        //         {this.state.isLoggedIn ? <h1>Home</h1> : <h1>Login</h1>}
        //         {this.state.isLoggedIn ? <button onClick={this.toggleLoggedInState}>Logout</button> : <button onClick={this.toggleLoggedInState}>Login</button>}
        //     </div>
        // )

        // Method 3
        // let comp, btnLabel;

        // if(this.state.isLoggedIn){
        //      comp = <h1>Home</h1>
        //      btnLabel = 'Logout'
        // }
        // else{
        //     comp = <h1>Login</h1>
        //     btnLabel = 'Login'
        // }
        // return(
        //     <div>
        //         {comp}
        //         <button onClick={this.toggleLoggedInState}>{btnLabel}</button>
        //     </div>
        // )

        // Method 2
        // if(this.state.isLoggedIn){
        //     return <div>
        //         <h1>Home</h1>
        //         <button onClick={this.toggleLoggedInState}>Logout</button>
        //     </div>
        // }
        // return <div>
        //     <h1>Login</h1>
        //     <button onClick={this.toggleLoggedInState}>Sign In</button>
        //     </div>


        // Method 1
        
        // if(this.state.isLoggedIn){
        //     return <h1>Home</h1>
        // }
        // else{
        //     return <h1>Login</h1>
        // }
    
            // return(
            //     <h1>{a}</h1>
            // )
        
    }
}

export default Conditional
