import React from 'react'

export default class HW1Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h1>HW1Counter</h1>
        <button onClick={() => this.setState({ counter: this.state.counter + 1})}>
          <h1>counter: {this.state.counter || 0}</h1>
        </button>
      </div>
    )
  }
}
