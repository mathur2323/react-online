import React from 'react';
import State from './components/State';
import AnotherComponent from './components/AnotherComponent';
import Conditional from './components/Conditional';

function App() {
  return (
    <div>
      <State />
      <AnotherComponent title="Passing data from app component to another component" source="props" />
      <Conditional />
    </div>
  );
}

export default App;
