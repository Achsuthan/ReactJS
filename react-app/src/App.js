import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Intro from './Intro';
import PropTypes from 'prop-types';
import './App.css';
import Car from './Car'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      car: ["Car1", "Car2", "Car3", "Car4"]
    }
  }
  //function 
  setName(name){
    this.lastname = name
    return this.lastname
  }
  ClickAndSee() {
    console.log("Button function Called")
    this.setState ( {car: this.state.car.reverse()} )
  }

  render() {
    return (
      <div className="App">
      <h1>Hello User : {this.firstname} {this.setName("Achsuthan")}</h1>
      <h2>{this.props.id} {this.props.name} {this.props.stable}</h2>
      <Header msg = {this.props.id} car = {this.props.car}/>
      <Intro />
      <h1 onClick = {this.ClickAndSee.bind(this)} >Hello</h1>
      <h1 onMouseEnter = {this.ClickAndSee.bind(this)} onMouseLeave = {this.ClickAndSee.bind(this)}>Mouse Move</h1>
      <Car car = {this.state.car}/>
      </div>
    );
  }
}

//define the type of props type 
App.propTypes = {
  id :  PropTypes.string,
  name :  PropTypes.string,
  stable :  PropTypes.bool
}

//default props for this App component
App.defaultProps = {
    id : "12",
    name : "Achsuthan",
    stable : true,
    car : ["A1","A2","A3","A4"]
}


export default App;
