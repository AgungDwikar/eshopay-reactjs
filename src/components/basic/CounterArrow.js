import React, { Component } from "react";

export default class CounterArrow extends Component {
    // inisial state tanpa constructor

    state = {
        counter: 10,
    };

    // mengunakan arrow function tanpa binding
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        return (
            <div>
                <h1>Counter With Arrow Function : {this.state.counter} </h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <hr></hr>
            </div>
        );
    }
}
