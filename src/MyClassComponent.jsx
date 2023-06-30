import React from "react";

class MyClassComponent extends React.Component{
    render(){
        // this.props.name="love"
        return(
            <h3>This is class Component {this.props.name}</h3>
        )
    }
}

export default MyClassComponent;