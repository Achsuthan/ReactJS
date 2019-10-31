import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("This is component did update");
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //get data from server API call
    }
  }

  componentWillUnmount() {
    console.log("Counter unmount");
  }

  getBadgeClass() {
    let clases = "badge m-2 badge-";
    clases += this.props.counter.value === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          disabled={this.props.counter.value <= 0 ? "disabled" : ""}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
      </div>
    );
  }
}

export default Counter;
