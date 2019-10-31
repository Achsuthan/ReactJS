import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  constructor() {
    super();
    console.log("This is app constructor");
    //1. From the constructor we can strightly asign the value to state we don't need to do setState
    //2. If we want to asign the value from props to state we need to get the props from the constructor and we need to pass that props to super also
  }

  componentDidMount() {
    console.log("This is component did mount");
    //call the api calls
  }

  handlerIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handlerReset = () => {
    console.log("Handle Reset");
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handlerDelete = counterId => {
    console.log("handler Delete called");
    console.log("counter id", counterId);
    const counters = this.state.counters.filter(counter => {
      return counter.id != counterId;
    });
    this.setState({ counters });
  };

  render() {
    console.log("This is render method");
    return (
      <div>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handlerReset}
            onIncrement={this.handlerIncrement}
            onDelete={this.handlerDelete}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
