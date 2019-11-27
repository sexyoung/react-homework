import React, { useState } from 'react';

const getRandNum = () => {
  return ~~(Math.random() * 10);
}

export default function HW16NumberGame() {
  const [ ok, setOK ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ value, setValue ] = useState('');
  const [ number, setNumber ] = useState(getRandNum());

  const handleChange = ({ target }) => {
    if(+target.value === number)
      setOK(ok+1);
    else
      setBad(bad+1);
    
    setValue('');
    setNumber(getRandNum());
  }
  return (
    <div className="container">
      隨機產生 0 ~ 9 的數字，使用者於輸入格內輸入數字，統計正確與錯誤的數量
      <h1 className="text-center">{number}</h1>
      <div className="text-center">
        <input type="text" onChange={handleChange} value={value} />
        <h2>答對: {ok}</h2>
        <h2>答錯: {bad}</h2>
      </div>
    </div>
  )
}
