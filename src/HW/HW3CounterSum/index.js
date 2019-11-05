import React, { Component } from 'react';

export default class HW3CounterSum extends Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
      counter: 0,
    }
  }

  handleClick = ()  => {
    const { sum, counter } = this.state;
    this.setState({
      counter: counter + 1,
      sum: sum + counter + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>它會 + 1, +2, .... +n</h1>
        <button onClick={this.handleClick}>
          <h1>add it</h1>
        </button>
        <h1>{this.state.sum}</h1>
      </div>
    )
  }
}
