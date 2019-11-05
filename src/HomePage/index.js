import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>React Homework</h1>
      <ul>
        <li><Link to="/HW/HW1Counter">Counter</Link></li>
        <li><Link to="/HW/HW2CounterList">CounterList</Link></li>
        <li><Link to="/HW/HW3CounterSum">CounterSum</Link></li>
        <li><Link to="/HW/HW4BMI">BMI</Link></li>
        <li><Link to="/HW/HW5ItemList">ItemList</Link></li>
      </ul>
    </div>
  )
}
