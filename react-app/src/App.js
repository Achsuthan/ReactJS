import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Intro from './Intro';
import './App.css';

class App extends Component {

  //defining constructor
  constructor (props) {
    super(props)
    this.firstname = "Mahendran"
    this.state = {}
  }

  //function 
  setName(name){
    this.lastname = name
    return this.lastname
  }


  


  render() {
    return (
      <div className="App">
      <h1>Hello User : {this.firstname} {this.setName("Achsuthan")}</h1>
      <Header msg = {this.props.id}/>
      <Intro />
      </div>
    );
  }
}

//default props for this App component
App.defaultProps = {
    id : "12342"
}


export default App;
