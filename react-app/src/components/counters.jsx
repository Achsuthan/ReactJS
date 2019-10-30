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
        return ( <div>
            {this.state.counters.map((counter)=>(
                <Counter key={counter.id} value={counter.value} selected={true} id={counter.id} onDelete={this.handlerDelete}/>
            ))}
        </div> );
    }

    handlerDelete = (counterId) =>{
        console.log("handler Delete called")
        console.log("counter id", counterId)
        const counters = this.state.counters.filter((counter)=>{
            return counter.id != counterId
        })
        this.setState({counters })
    }
}
 
export default Counters;