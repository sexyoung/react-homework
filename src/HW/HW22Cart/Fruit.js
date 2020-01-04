import React, { createRef } from 'react';
import './Fruit.scss';

export default function Fruit(props) {

  const input = createRef();

  const handleSubmit = e => {
    e.preventDefault();
    props.addCart(props.id, +input.current.value);
    input.current.value = '';
  }
  

  return (
    <div className="Fruit">
      <div>{props.name}</div>
      <div>${props.price}</div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="數量" ref={input} />
        <button className="btn btn-primary">加入購物車</button>
      </form>
    </div>
  )
}

