import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Intro from './Intro';
import PropTypes from 'prop-types';
import './App.css';
import Car from './Car'
import Body from './Body';
import Navigation from './Navigation';

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
      {/* <h1>Hello User : {this.firstname} {this.setName("Achsuthan")}</h1>
      <h2>{this.props.id} {this.props.name} {this.props.stable}</h2>
      <Header msg = {this.props.id} car = {this.props.car}/>
      <Intro />
      <h1 onClick = {this.ClickAndSee.bind(this)} >Hello</h1>
      <h1 onMouseEnter = {this.ClickAndSee.bind(this)} onMouseLeave = {this.ClickAndSee.bind(this)}>Mouse Move</h1>
      <Car car = {this.state.car}/>
      <Body /> */}

      <Navigation />

      <Header />

    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 className="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on September 24, 2018</p>
          </div>
          <hr />
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
              </h2>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on September 18, 2018</p>
          </div>
          <hr />
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Science has not yet mastered prophecy
              </h2>
              <h3 className="post-subtitle">
                We predict too much for the next year and yet far too little for the next ten.
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on August 24, 2018</p>
          </div>
          <hr />
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Failure is not an option
              </h2>
              <h3 className="post-subtitle">
                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on July 8, 2018</p>
          </div>
          <hr/>
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">Copyright &copy; Your Website 2018</p>
          </div>
        </div>
      </div>
    </footer>









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
