import React, { Component } from 'react';

import CurrencyInput from './CurrencyInput';

export default class HW8Currency extends Component {
  constructor() {
    super();
    this.state = {
      moeny: 0,
      currency: '',
    };
  }

  handleChange = (moeny, currency) => {
    this.setState({moeny, currency})
  }

  render() {
    const { moeny, currency } = this.state;
    const TWD = currency === 'TWD' ? moeny: moeny * 30;
    const USD = currency === 'USD' ? moeny: moeny / 30;
    
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <h1>台幣(TWD) 與 美金(USD) 轉換</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換
            </h5>
            <p className="card-text">
              1美金 = 30 台幣
            </p>

            <CurrencyInput currency={'TWD'} onChange={this.handleChange} value={TWD} />
            <CurrencyInput currency={'USD'} onChange={this.handleChange} value={USD} />

          </div>
          <div className="card-footer text-muted">
            © sexyoung
          </div>
        </div>
      </div>
    )
  }
}
