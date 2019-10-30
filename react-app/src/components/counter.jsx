import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
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
      value: this.state.value + 1
    });
  };

  getBadgeClass() {
    let clases = "badge m-2 badge-";
    clases += this.state.value === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
