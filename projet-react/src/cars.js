import React, { Component } from 'react';

export const car = ["car1" ,"car2"];


class Cars extends React.Component{
names = ()=> 'Cars Name : ';
    state = {
        car1 : car[0],
        car2 : car[1]
    }
render(){
    return(
        <div>
            <h1>{this.names()}</h1>
            <h2>{this.state.car1}</h2>
            <h2>{this.state.car2}</h2>
        </div>
    )
}
}
                
export default Cars ;