import React, { useState } from 'react';

const genAnswer = () => {
  let answer = [...Array(10).keys()];
  answer.sort(() => Math.random() - .5);
  return answer.join('').slice(0, 4);
}

let answer = genAnswer();

const getAB = reply => {
  let A = 0;
  let B = 0;
  let result = '';
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < reply.length; j++) {
      if(answer[i] === reply[j]) {
        if(i === j) A++; else B++;
      }
    }
  }
  result += (A ? `${A}A`: '');
  result += (B ? `${B}B`: '');
  result = result || '0A0B';
  return result;
}

export default function HW211A2B() {
  const [reply, setReply] = useState('');
  const [history, setHistory] = useState([]);
  const [overText, setOverText] = useState('');

  const handleChange = ({ target }) => {
    setReply(target.value);
  }

  const checkReply = reply => {
    if(reply.length !== 4) return false;
    if(!/^\d+$/.test(reply)) return false;
    if([...new Set(reply.split(''))].length !== 4) return false;
    return true;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!checkReply(reply)) return alert('格式不正確');

    const result = getAB(reply);
    if(result === '4A') {
      setOverText('答對了！遊戲結束，你要重新一局嗎？');
    }
    setHistory([`${reply}: ${result}`, ...history]);
    setReply('');
  }

  const restart = () => {
    answer = '';
    setReply('');
    setHistory([]);
    setOverText('');
  }

  return (
    <div className="container">
      <div className="card text-center mx-auto mt-4" style={{width: "30rem"}}>
        <h1>猜數字</h1>
        <ol style={{ textAlign: 'left'}}>
          <li>一進到遊戲電腦隨機產生4位不重複數字</li>
          <li>使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</li>
          <li>送出的答案跟正確答案比較，位置一樣則A，位置不同則B</li>
          <li>會累積過去猜過的答案與結果</li>
          <li>如果猜到 4A 則遊戲結束，並可以另開新局。</li>
        </ol>
        <form onSubmit={handleSubmit}>
          <input type="text" value={reply} onChange={handleChange} />
          <button disabled={overText}>猜!</button>
        </form>
        {overText &&
          <div>
            <div>{overText}</div>
            <button onClick={restart}>好</button>
          </div>
        }
        <ul>
          {history.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    </div>
  )
}
