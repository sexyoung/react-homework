import React from 'react';
import Fruit from './Fruit';

const fruitList = [
  {id: 1, name: '橘子', price: 20},
  {id: 2, name: '蓮霧', price: 33},
  {id: 3, name: '哈蜜瓜', price: 41},
  {id: 4, name: '蘋果', price: 51},
  {id: 5, name: '葡萄柚', price: 15},
]

export default function HW22Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            {fruitList.map((fruit, index) =>
              <div key={index} className="col-sm-3">
                <Fruit {...fruit} />
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-4">

        </div>
      </div>
    </div>
  )
}
