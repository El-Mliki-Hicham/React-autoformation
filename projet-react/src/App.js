import logo from './logo.svg';
import './App.css';

import React from 'react';
import Cars, { StateFul, StateLess } from "./cars";
import Person from './Persons/persons';


class App extends React.Component{
  state={
      persons :[
        {id:1,Name:"hicham",age:21},
        {id:2,Name:"Nada",age:21},
    ]
    
  }
  render(){
    return (
      <div>
        <Person  data={this.state.persons} />
        <Cars />
        <StateLess />
      <StateFul />
      </div>
    )
  }
}

export default App;
