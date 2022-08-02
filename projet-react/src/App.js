import logo from './logo.svg';
import './App.css';

import React from 'react';
import {cars as x} from "./cars";

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>{x[0]}</h1>
        <h1>{x[1]}</h1>
      </div>
    )
  }
}

export default App;
