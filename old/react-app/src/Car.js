import React, { Component } from 'react';


class Car extends Component {
    render() {
        return (
            <div>
                {this.props.car.map((item,i) => {
                    return <p key = {i}>  {item} </p> 
                })}
                
            </div>
        );
    }
}
export default Car