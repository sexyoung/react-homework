import React from 'react';
import './style.scss';

export default function HW24Lottery() {
  return (
    <div className="HW24Lottery">
      <div className="container">
          <div className="block mx-auto">
            <div className="header">
              <h1>大樂透</h1>
              <div className="open-date">
                開獎日期：
                <span className="date">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <div className="content">content</div>
          </div>
      </div>
    </div>
  )
}
