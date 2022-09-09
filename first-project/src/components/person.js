import React from "react";
import axios from "axios";

class Person extends React.Component {
state= {
    user : []
}

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data => {
        console.log(data.data) 
        this.setState({
            user: data.data
        })
    
})  
}
 render(){
    return (
    <div>
        {this.state.user.map(person =>
        <div>
       <p><h1>Name : </h1> {person.name}</p>
       <p><h1>Email: </h1> {person.email}</p>
       </div>
        )}
        
        </div>
    )
 }  
}

export default Person 