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
    if(!this.state.value.trim()) return;
    this.setState({
      value: '',
      list: [this.state.value, ...this.state.list]
    })
    
  }


  render() {
    return (
      <div>
        <h1>清單</h1>
        在輸入框任意輸入後 Enter 即可產生一筆新項目 <br/>
        並且會把原本的輸入格清空 <br/>
        若使用者輸入空白或沒輸入則不能新增
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
