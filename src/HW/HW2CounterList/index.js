import React, { Component } from 'react'

export default class HW2CounterList extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      list: []
    }
  }
  render() {
    return (
      <div>
        <h1>HW2CounterList</h1>
        <button onClick={() => {
          this.setState({
            counter: this.state.counter + 1,
            list: [this.state.counter + 1, ...this.state.list]
          });
        }}>
          <h1>submit</h1>
        </button>
        <ul>
          {this.state.list.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )
  }
}
