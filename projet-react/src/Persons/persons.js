import React from "react";

class Person extends React.Component{
    render(){
        const data = this.props.data;
        const Show_Data=data.map( values => {
            return (
                 < div>
                 <p>{values.id}</p>
                 <p>{values.Name}</p>
                 <p>{values.age}</p>
                 </div>  
            )
        })
        return(
            <dev>
                {Show_Data}
            </dev>
        )
    }
}
export default Person ;