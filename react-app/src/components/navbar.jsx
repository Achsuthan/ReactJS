import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-lighy">
          <a className="navbar-brand" href="#">
            Nav Bar
            <span
              style={{ marginLeft: "10px" }}
              className="badge badge-pill badge-secondary"
            >
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
