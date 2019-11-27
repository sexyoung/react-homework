import cx from 'classnames';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import style from "./style.module.scss";

export default class HW13TodoList extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      list: [
        { id: Math.random(), content: '待辦事項1', done: false },
        { id: Math.random(), content: '待辦事項2', done: false },
        { id: Math.random(), content: '待辦事項3', done: true },
      ]
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.value.trim()) return;
    this.setState({
      list: [
        {id: Math.random(), content: this.state.value, done: false},
        ...this.state.list,
      ],
      value: '',
    })
  }

  handleToggleDone = id => {
    const { list } = this.state;
    const itemIndex = list.findIndex(item => item.id === id);
    list[itemIndex].done = !list[itemIndex].done;
    this.setState({ list })
  }
  render() {
    const { list, value } = this.state;
    return (
      <div className={cx("container", style.HW13TodoList)}>
        一開始你會有一個清單，內有3個項目，內容如下： <br /><br />
        <ReactMarkdown source={`
      { id: Math.random(), content: '待辦事項1', done: false },
      { id: Math.random(), content: '待辦事項2', done: false },
      { id: Math.random(), content: '待辦事項3', done: true },
        `} />
        <div>
        </div>
        <form onSubmit={this.handleSubmit} className="mt-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="todo..." value={value} onChange={this.handleChange}  />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary">Create!</button>
            </div>
          </div>
        </form>
        <ul className="list-group">
        {list.map(item =>
          <li key={item.id} className={cx("list-group-item", { [style.done]: item.done})} onClick={this.handleToggleDone.bind  (this, item.id)}>{item.content}</li>
        )}
        </ul>
      </div>
    )
  }
}
