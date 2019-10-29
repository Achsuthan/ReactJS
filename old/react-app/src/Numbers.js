import React, { Component } from 'react';


class Numbers extends Component {

    componentDidMount(){
        console.log("componentDidMount Called");
    }

    componentWillMount(){
        console.log("componentWillMount called");
    }

    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps called "+ newProps);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

    componentWillUpdate(newProps, nextState){
        console.log("componentWillUpdate called newProps "+ newProps+ " nextState "+nextState);
    }

    componentDidUpdate(newProps, nextState){
        console.log("componentDidUpdate called newProps "+ newProps+ " nextState "+nextState);
    }

    shouldComponentUpdate(newProps, nextState){
        console.log("shouldComponentUpdate called newProps "+ newProps+ " nextState "+nextState);
        return true
    }

    render() {
        return (
            <div>
                <br/>
                <p>
                    {this.props.myNumber}
                </p>
            </div>
        );
    }
}

export default Numbers;