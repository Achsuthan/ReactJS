import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = {
        counters: [{
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
        }]
    }
    render() {
        return (<div>
            <button className="btn btn-secondary btn-sm" onClick={this.handlerReset}>Reset</button>
            {this.state.counters.map((counter) => (
                <Counter key={counter.id} counter={counter} onDelete={this.handlerDelete} onIncrement={this.handlerIncrement} />
            ))}
        </div>);
    }
    handlerIncrement = (counter) => {
        console.log(counter)
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({counters})
    }
    handlerReset = () => {
        console.log("Handle Reset")
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        })
        this.setState({counters})
    }

    handlerDelete = (counterId) => {
        console.log("handler Delete called")
        console.log("counter id", counterId)
        const counters = this.state.counters.filter((counter) => {
            return counter.id != counterId
        })
        this.setState({ counters })
    }
}

export default Counters;