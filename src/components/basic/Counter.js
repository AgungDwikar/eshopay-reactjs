import React, { Component } from "react";

export default class Counter extends Component {
    // cara sebelum react js version 16 yaitu menggunakan contructor
    constructor() {
        super();
        this.state = { counter: 4 };

        // binding
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrement() {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div>
                <h1>Counter Basic : {this.state.counter} </h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <hr></hr>
            </div>
        );
    }
}
