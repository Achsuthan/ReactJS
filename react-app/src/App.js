import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Intro from './Intro';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.firstname = "Mahendran"
    this.state = {}
  }

  setName(name){
    this.lastname = name
    return this.lastname
  }


  render() {
    return (
      <div className="App">
      <h1>Hello User : {this.firstname} {this.setName("Achsuthan")}</h1>
      <Header />
      <Intro />
      </div>
    );
  }
}


export default App;
