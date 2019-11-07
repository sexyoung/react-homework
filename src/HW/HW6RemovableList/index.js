import React, { Component } from 'react'

export default class HW6RemovableList extends Component {
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
    if(!this.state.value.trim()) return;
    this.setState({
      value: '',
      list: [this.state.value, ...this.state.list]
    })
    
  }

  handleDelete = index => {

    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        ...this.state.list.slice(index + 1),
      ]
    });
    
  }
  render() {
    return (
      <div>
        <h1>可移除的清單</h1>
        繼HW5後，新增可移除的功能
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
        <ul>
          {this.state.list.map((item, index) =>
            <li key={index}>{item} <button onClick={this.handleDelete.bind(this, index)}>remove</button> </li>
          )}
        </ul>
      </div>
    )
  }
}
