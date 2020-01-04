import React, { useState } from 'react';
import Fruit from './Fruit';

const fruitList = [
  {id: 1, name: '橘子', price: 20},
  {id: 2, name: '蓮霧', price: 30},
  {id: 3, name: '哈蜜瓜', price: 40},
  {id: 4, name: '蘋果', price: 50},
  {id: 5, name: '葡萄柚', price: 15},
]

export default function HW22Cart() {

  const [order, setOrder] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0});

  const addCart = (id, quantity) => {
    setOrder({
      ...order,
      [id]: order[id] + quantity
    });
  }

  const handleDecrease = id => {
    setOrder({
      ...order,
      [id]: order[id] - 1
    });
  }

  const handleClear = id => {
    setOrder({
      ...order,
      [id]: 0
    });
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            {fruitList.map((fruit, index) =>
              <div key={index} className="col-sm-3">
                <Fruit {...{ addCart, ...fruit }} />
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-4">
          {Object.values(order).some(v => v) &&
            <ul>
              {fruitList
                .filter(({ id }) => order[id])
                .map(({id, name, price}) =>
                  <li key={id}>
                    {name} x {order[id]} = ${order[id] * price}
                    <button className="btn btn-sm btn-warning" onClick={handleDecrease.bind(this, id)}>-1</button>
                    <button className="btn btn-sm btn-danger" onClick={handleClear.bind(this, id)}>clear</button>
                  </li>
                )
              }
              <li>========</li>
              <li>
                ${fruitList
                  .filter(({ id }) => order[id])
                  .reduce((sum, {id, price}) =>
                    sum + order[id] * price
                  , 0)
                }
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  )
}
