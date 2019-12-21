import React, { useState } from 'react';

const rand = (n, m) => {
  return ~~(Math.random() * (m - n + 1)) + n;
}

let answer = rand(1, 1000);

export default function HW20GuessNum() {

  const [ min, setMin ] = useState(1);
  const [ max, setMax ] = useState(1000);
  const [ value, setValue ] = useState('');
  const [ isShowInfo, setIsShowInfo ] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setValue('');
    if(+value < answer) return setMin(+value);
    if(+value > answer) return setMax(+value);
    setIsShowInfo(true);
  }

  const reset = () => {
    setMin(1);
    setMax(1000);
    setIsShowInfo(false);
  }
  return (
    <div>
      <h2>現在範圍: {min} ~ {max}</h2>
      <form onSubmit={handleSubmit}>
        <input
          disabled={isShowInfo}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)} />
        <button disabled={isShowInfo}>submit</button>
      </form>
      {
        isShowInfo &&
        <h1>
          答案了！答案就是{answer}<br />
          <button onClick={reset}>重新一局</button>
        </h1>
      }
    </div>
  )
}
