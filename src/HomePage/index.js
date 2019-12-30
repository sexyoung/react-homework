import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>React Homework</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="badge badge-warning badge-pill">new</span> <Link to="/HW/HW22Cart">Cart</Link>
          購物車
        </li>
        <li className="list-group-item">
          <span className="badge badge-warning badge-pill">new</span> <Link to="/HW/HW211A2B">1A2B</Link>
          猜數字
        </li>
        <li className="list-group-item">
          <span className="badge badge-warning badge-pill">new</span> <Link to="/HW/HW20GuessNum">GuessNum</Link>
          ：終極密碼
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW19Gopher">Gopher</Link>
          ：打地鼠遊戲
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW18TwinklingChar">TwinklingChar</Link>
          ：閃爍的字母
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW17RandomNum">RandomNum</Link>
          ：隨機數字
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW16NumberGame">NumberGame</Link>
          ：打數字遊戲
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW15LengthConversion">LengthConversion</Link>
          ：長度轉換
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW14Pokemon">Pokemon</Link>
          ：寶可夢篩選 fetch 與 filter
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW13TodoList">TodoList</Link>
          ：react 的綜合應用
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW12Tab">Tab</Link>
          ：標籤
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW11ColorPad">ColorPad</Link>
          ：控制 css
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW10Currency">Currency</Link>
          ：傳遞function 到子層
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW9HYN">Happy New Year</Link>
          ：計時器 與 日期的應用
        </li>
        <li className="list-group-item">
          <Link to="/HW/HW8SumForButton">SumForButton</Link>
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
