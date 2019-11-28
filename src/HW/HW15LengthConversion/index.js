import React, { Component } from 'react';
import LenInput from './LenInput';

const sumSerial = n => {
  return [...Array(n).keys()].reduce((sum, value) => sum + value , 0);
}

const unitConverter = (number, oriUnit, toUnit) => {
  if(!oriUnit) return 0;
  const unitList = ['mm', 'cm', 'm', 'km'];
  const mm = number * Math.pow(10, unitList.indexOf(oriUnit));
  return mm / Math.pow(10, unitList.indexOf(toUnit));
}

export default class HW15LengthConversion extends Component {

  constructor() {
    super();
    this.state = {
      len: 0,
      unit: '',
    };
  }

  handleChange = (number, unit) => {
    this.setState({
      unit,
      number,
    })
  }

  render() {
    const { number, unit } = this.state;
    const MM = unitConverter(number, unit, 'mm');
    const CM = unitConverter(number, unit, 'cm');
    const M = unitConverter(number, unit, 'm');
    const KM = unitConverter(number, unit, 'km');

    return (
      <div className="container">
        <h2>長度轉換</h2>
        <LenInput unit={'mm'} onChange={this.handleChange} value={MM} />
        <LenInput unit={'cm'} onChange={this.handleChange} value={CM} />
        <LenInput unit={'m'} onChange={this.handleChange} value={M} />
        <LenInput unit={'km'} onChange={this.handleChange} value={KM} />
      </div>
    )
  }
}
