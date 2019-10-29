import React, { Component } from 'react';
import Numbers from "./Numbers"


class Body extends Component {

    constructor(props){
        super(props)

        this.state = {
            r: 0
        }
    }

    RandomNumbers(){
        console.log("Random Numbers button clicked")
        this.setState({
            r : Math.floor(Math.random()*10) 
        })
    }
    render() {
        return (
            <div>
                <button onClick = {this.RandomNumbers.bind(this)}>Random Numbers</button>
                <Numbers myNumber = {this.state.r}/>
            </div>
        );
    }
}
export  default Body;
