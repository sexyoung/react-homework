import React, { useState, useEffect, useCallback } from 'react';

const getRand = (m, n) =>  ~~((n - m + 1) * Math.random()) + m;

export default function HW18TwinklingChar() {

  const [ box, setBox ] = useState(false);
  const [ score, setScore ] = useState(0);

  const tick = useCallback(() => {
    setBox(box => !box);
    setTimeout(tick, getRand(500, 3000));
  }, [])

  useEffect(() => {
    tick();
  }, [tick]);

  const handleChange = ({ target }) => {
    const typeChar = target.value.toLowerCase();
    const isCorrect = box && typeChar === 'q';
    setScore(score => score + (isCorrect ? 1: -1));
    setBox(false);
  }

  return (
    <div className="container">
      <div className="card text-center mx-auto mt-4" style={{width: "18rem"}}>
        <h1> {box ? 'Q': '-'} </h1>
        <h2>分數: {score}</h2>
        <div className="card-body">
          <h5 className="card-title">出現Q按Q</h5>
          <p className="card-text">上面的字母會不定期顯示為 Q, 顯示為 Q 時，鍵盤按下 Q 則得1分（並且立刻改回 - )，沒出現 Q 或打其他鍵，則扣分。</p>
          <input type="text" className="form-control" placeholder="todo..." value={''} onChange={handleChange}  />
        </div>
      </div>
    </div>
  )
}
