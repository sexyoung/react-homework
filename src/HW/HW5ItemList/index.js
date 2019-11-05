import React, { Component } from 'react';

export default class HW5ItemList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      value: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value
    });
    
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({
      value: '',
      list: [this.state.value, ...this.state.list]
    })
    
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
        <ul>
          {this.state.list.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    )
  }
}
