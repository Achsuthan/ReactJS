import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onDelete,
  onIncrement,
  onReset,
  onDecrement
}) => {
  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={onReset}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
