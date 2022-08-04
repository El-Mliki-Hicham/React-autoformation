import logo from './logo.svg';
import './App.css';

import React from 'react';
import Cars, { StateFul, StateLess } from "./cars";


class App extends React.Component{
  render(){
    return (
      <div>
        <Cars />
        <StateLess />
      <StateFul />
      </div>
    )
  }
}

export default App;
