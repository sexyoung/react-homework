import React, { useEffect, useState } from 'react';

const getRand = (m, n) =>  ~~((n - m + 1) * Math.random()) + m;

export default function HW17RandomNum() {

  const [ num, setNum ] = useState(getRand(1, 9));

  useEffect(() => {
    const tick = () => {
      setNum(getRand(1, 9));
      setTimeout(tick, getRand(500, 1000));
    }
    tick();
  }, [])

  return (
    <div className="container text-center">
      <h2>請設定一個會隨機變化的數字(1~9)</h2>
      <h3>每次變的時間介於 500ms ~ 1000ms 之間</h3>
      <h1>{num}</h1>
    </div>
  )
}
