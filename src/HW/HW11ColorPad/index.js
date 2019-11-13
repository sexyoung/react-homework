import React, { useState } from 'react';

export default function HW11ColorPad() {

  const [ red, setRed ] = useState(0);
  const [ green, setGreen ] = useState(0);
  const [ blue, setBlue ] = useState(0);

  const handleChange = (fn, e) => {
    fn(e.target.value);
  }

  return (
    <div className="container">
      <h1>調色盤</h1>
      <h3>input type="range" 可以做出像拉桿一樣的東西</h3>
      <div className="form-group">
        <label>Red</label>
        <input type="range" min="0" max="255" value={red} onChange={handleChange.bind(this, setRed)} />
      </div>
      <div className="form-group">
        <label>Green</label>
        <input type="range" min="0" max="255" value={green} onChange={handleChange.bind(this, setGreen)} />
      </div>
      <div className="form-group">
        <label>Blue</label>
        <input type="range" min="0" max="255" value={blue} onChange={handleChange.bind(this, setBlue)} />
      </div>
      <div className="colorPad" style={{
        width: 200,
        height: 200,
        backgroundColor: `rgb(${red},${green},${blue})`
      }}></div>
    </div>
  )
}
