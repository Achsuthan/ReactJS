import React, {Component} from 'react';

class Header extends Component {
    render() {
      return(
        <div>
          <header className="App-header">
            {
            //<img src={logo} className="App-logo" alt="logo" />
            }
            {/* <h1 className="App-title">Welcome to React {this.props.msg}</h1> */}
            <div>
              <p>
              {this.props.car.map((item,i) => {
                return " " + item;
              })}
              </p>
            </div>
          </header>
        </div>
      )
    }
  }

  export default Header