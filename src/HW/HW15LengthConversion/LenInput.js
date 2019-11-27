import React from 'react'

export default function LenInput(props) {

  const handleChange = e => {
    props.onChange(e.target.value, props.unit);
  }

  return (
    <div className="input-group mb-3">
      <input
        type="number"
        value={props.value}
        onChange={handleChange}
        className="form-control"
        placeholder={`輸入${props.unit}`}
      />
      <div className="input-group-append">
        <span className="input-group-text">{props.unit}</span>
      </div>
    </div>
  )
}
