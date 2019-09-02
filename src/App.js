import React from 'react';
import State from './components/State';
import AnotherComponent from './components/AnotherComponent';
import Conditional from './components/Conditional';
import Archana from './components/Archana'
import Swati from './components/Swati'
import Provider from './components/Context';
class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bool:false
    }
  }
  
  render(){
  return (
    <Provider>
      {/* <State />
      <AnotherComponent title="Passing data from app component to another component" source="props" />
      <Conditional /> */}
      {/* <Archana> 
        {
          this.state.bool ? <p>Lorem Ipsum</p> : <a href=''>Lorem Ipsum</a>
        }
      </Archana> */}
      <Archana />
      <Swati />


    </Provider>
  );
}
}

export default App;
