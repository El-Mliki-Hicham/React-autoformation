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

    ],
    input:'',
    Name:'',
    
  }


  AutoShow = (input)=>{

    this.setState({ input : input.target.value,
    })
    }

    showData=(value)=>{
      value.preventDefault();
       this.setState({
        Name : this.state.input
       }) 
    }
  render(){
    return (
      <div>
        <Person  data={this.state.persons} />
        <Cars />
        <StateLess />
      <StateFul />
      <div>
        <h1>forms input</h1>
        <p>{this.state.input}</p>
        <p>{this.state.Name}</p>
        <form onSubmit={this.showData}>
        <input type='text' onChange={this.AutoShow} />
        <button ></button>
        </form>
      </div>
      </div>
    )
  }
}

export default App;
