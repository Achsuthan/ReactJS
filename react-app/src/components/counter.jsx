import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(2)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = val => {
    console.log("This ", this);
    this.setState({
      count: this.state.count + 1
    });
  };

  getBadgeClass() {
    let clases = "badge m-2 badge-";
    clases += this.state.count === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
