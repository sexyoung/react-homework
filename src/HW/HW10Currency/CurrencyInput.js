import React from 'react'

export default function CurrencyInput(props) {

  const handleChange = e => {
    props.onChange(e.target.value, props.currency);
  }

  return (
    <div className="input-group mb-3">
      <input
        type="number"
        value={props.value}
        onChange={handleChange}
        className="form-control"
        placeholder={`輸入${props.currency}`}
      />
      <div className="input-group-append">
        <span className="input-group-text">{props.currency}</span>
      </div>
    </div>
  )
}
