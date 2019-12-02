import React, { Component } from 'react';
import LenInput from './LenInput';

const proportion = {
  'mm':       1,
  'cm':      10,
  'm':     1000,
  'km': 1000000,
}

const unitConverter = (number, oriUnit, toUnit) => {
  if(!oriUnit) return 0;
/**
 * 1000000 km -> 6
 * 100000 m -> 5
 * 1000 cm -> 3
 * 1 -> 0
 */
  const mm = number * proportion[oriUnit];
  return mm / proportion[toUnit];
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
