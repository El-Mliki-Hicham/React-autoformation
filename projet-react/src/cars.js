import React, { Component } from 'react';

export const car = ["car1" ,"car2","null"];


class Cars extends React.Component{
    
    showAlert =()=>{
        return alert(this.state.car1);
    }
    
    names = ()=> 'Cars Name : ';
    state = {
        car1 : car[0],
        car2 : car[1],
        car3 : car[2]
    
    }

changeState = ()=>{
    this.setState({
        car3 : "car3",
    })
}

render(){
    return(
        <div>
            <h1>{this.names()}</h1>
            <h2>{this.state.car1}</h2>
            <h2>{this.state.car2}</h2>
            <h2>{this.state.car3}</h2>
            <button onClick={this.showAlert}>Alert</button>
            <button onClick={this.changeState}>change state</button>
        </div>

    )
}
}
                
export default Cars ;