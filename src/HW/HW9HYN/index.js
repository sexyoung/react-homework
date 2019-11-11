import React, { Component } from 'react';

const date2020 = +new Date("2020/01/01");

export default class HW9HYN extends Component {
  constructor() {
    super();
    this.state = {
      date: +new Date()
    }
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      date: +new Date()
    });
  }

  render() {
    const time = ~~((date2020 - this.state.date) / 1000);
    
    const second = time % 60;
    const min = (~~(time / 60)) % 60;
    const hour = (~~(time / 60 / 60)) % 24;
    const day = ~~(time / 60 / 60/ 24);
    
    return (
      <div className="container">
        <h1>離2020跨年還有: {day}天{hour}時{min}分{second}秒</h1>
      </div>
    )
  }
}
