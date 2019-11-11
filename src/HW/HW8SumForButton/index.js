import React, { Component } from 'react'

export default class HW8SumForButton extends Component {

  constructor() {
    super();
    this.state = {
      sum: 0
    }
  }

  handleClick = n => {
    this.setState({
      sum: this.state.sum + n
    })
  }

  render() {
    return (
      <div className="container">
        <h1>加總按下的數字</h1>
        <div className="mx-auto">
          <div className="btn-group" role="group" aria-label="Basic example">
            {[...Array(9).keys()].map(i =>
              <button key={i} type="button" className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this, i + 1)}>{i + 1}</button>
            )}
          </div>
          <h2>{this.state.sum}</h2>
        </div>
      </div>
    )
  }
}
