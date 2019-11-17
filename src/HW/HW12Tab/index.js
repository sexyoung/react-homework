import React, { Component } from 'react'

export default class HW12TodoList extends Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
      content: [
        '好好仔細想想應該會有哪些 state 變數在控制介面',
        '我是內容2',
        '我是內容3',
      ]
    }
  }

  handleClick = tabIndex => {
    this.setState({ tabIndex })
  }
  render() {
    const { tabIndex, content } = this.state;
    return (
      <div className="container">
        <ul className="nav nav-tabs mt-5">
          {[0, 1, 2].map(item =>
            <li className="nav-item" key={item}>
              <a className={`nav-link ${item === tabIndex && 'active'}`} href="#/HW/HW12Tab" onClick={this.handleClick.bind(this, item)}>Tab {item + 1}</a>
            </li>
          )}
        </ul>
        <div>
          {content[tabIndex]}
        </div>
      </div>
    )
  }
}
