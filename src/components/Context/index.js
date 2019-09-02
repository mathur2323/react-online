import React, { Component, createContext } from 'react'

const DataContext = createContext();

class Provider extends Component {
    constructor() {
        super()
        this.state = {
             brand:'Tansen'
        }
    }

    handleBrandChange = ()=>{
        this.setState({
            brand:'Rajnigandha'
        })
    }
    
    render() {
        return (
            <DataContext.Provider value={[this.state.brand, this.handleBrandChange]}>
               { this.props.children } 
            </DataContext.Provider>
        )
    }
}

export const Consumer = DataContext.Consumer

export default Provider
