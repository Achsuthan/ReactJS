import React, {Component} from 'react';

class Header extends Component {
    render() {
      return(
        <div>
          {/* <header className="App-header">
            <div>
              <p>
              {this.props.car.map((item,i) => {
                return " " + item;
              })}
              </p>
            </div>
          </header> */}
          <header className="masthead">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
      )
    }
  }

  export default Header