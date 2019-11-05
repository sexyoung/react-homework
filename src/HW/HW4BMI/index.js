import React, { Component } from 'react';

export default class HW4BMI extends Component {
  constructor() {
    super();
    this.state = {
      cm: '',
      kg: '',
      BMI: null
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleClick = () => {
    const { cm, kg } = this.state;
    this.setState({
      BMI: Math.floor(kg / Math.pow(cm/100, 2))
    })
  }

  render() {
    return (
      <div>
        <h1>
          BMI 計算公式: 體重(公斤) / 身高(公尺) 的 2次方
        </h1>
        <div>身高: <input type="text" value={this.state.cm} name="cm" onChange={this.handleChange} />cm</div>
        <div>體重: <input type="text" value={this.state.kg} name="kg" onChange={this.handleChange} />kg</div>
        <button onClick={this.handleClick}>
          <h1>計算!</h1>
        </button>
        <h1>
          BMI: {this.state.BMI}
        </h1>
      </div>
    )
  }
}
