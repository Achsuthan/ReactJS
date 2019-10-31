import React, { Component } from "react";
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={props.onRest}>
        Reset
      </button>
      {props.counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
