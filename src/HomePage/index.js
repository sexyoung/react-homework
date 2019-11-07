import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>React Homework</h1>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="badge badge-warning badge-pill">new</span> <Link to="/HW/HW7PersonTable">7PersonTable</Link>
          ：fetch 抓取遠端資料
        </li>
        <li class="list-group-item">
          <span class="badge badge-warning badge-pill">new</span> <Link to="/HW/HW6RemovableList">RemovableList</Link>
          ：陣列的應用
        </li>
        <li class="list-group-item">
          <Link to="/HW/HW5ItemList">ItemList</Link>
          ：理解 e.target
        </li>
        <li class="list-group-item">
          <Link to="/HW/HW4BMI">BMI</Link>
          ：練習使用單一事件更改不同的 state
        </li>
        <li class="list-group-item">
          <Link to="/HW/HW3CounterSum">CounterSum</Link>
          ：練習 state
        </li>
        <li class="list-group-item">
          <Link to="/HW/HW2CounterList">CounterList</Link>
          ：練習 state
        </li>
        <li class="list-group-item">
          <Link to="/HW/HW1Counter">Counter</Link>
          ：練習 state
        </li>
      </ul>
    </div>
  )
}
