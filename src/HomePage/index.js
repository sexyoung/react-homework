import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>React Homework</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="badge badge-warning badge-pill">new</span> <Link to="/HW/HW10Currency">Currency</Link>
          ：傳遞function 到子層
        </li>
        <li className="list-group-item">
          <span className="badge badge-warning badge-pill">new</span> <Link to="/HW/HW9HYN">Happy New Year</Link>
          ：計時器 與 日期的應用
        </li>
        <li className="list-group-item">
          <span className="badge badge-warning badge-pill">new</span> <Link to="/HW/HW8SumForButton">SumForButton</Link>
          ：bind的使用時機
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW7PersonTable">PersonTable</Link>
          ：fetch 抓取遠端資料
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW6RemovableList">RemovableList</Link>
          ：陣列的應用
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW5ItemList">ItemList</Link>
          ：理解 e.target
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW4BMI">BMI</Link>
          ：練習使用單一事件更改不同的 state
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW3CounterSum">CounterSum</Link>
          ：練習 state
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW2CounterList">CounterList</Link>
          ：練習 state
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW1Counter">Counter</Link>
          ：練習 state
        </li>
      </ul>
    </div>
  )
}
